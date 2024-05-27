import { Directive, ElementRef, output } from '@angular/core';

@Directive({
    selector: '[ngxCopyPaste]',
    exportAs: 'copy,ngxCopy',
    standalone: true,
})
export class NgxCopyPasteDirective {
    public successCb = output();

    public constructor(private _elementRef: ElementRef) {}

    private copyWithSelection(): void {
        let select: Selection | null = window.getSelection();
        if (select) {
            select.removeAllRanges();
        }
        const element: HTMLElement = this._elementRef.nativeElement;
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            this._elementRef.nativeElement.select();
        } else {
            const range: Range = document.createRange();
            range.selectNodeContents(this._elementRef.nativeElement);
            select = window.getSelection();
            if (select) {
                select.addRange(range);
            }
        }
        this.successCb.emit();
        document.execCommand('copy');
    }

    public async copy(): Promise<void> {
        try {
            if (!navigator.clipboard) {
                this.copyWithSelection();
                return;
            }
            const element: HTMLElement = this._elementRef.nativeElement;
            const value =
                element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement
                    ? element.value?.trim()
                    : element.textContent?.trim();
            if (!value) {
                return;
            }
            await navigator.clipboard.writeText(value);
            this.successCb.emit();
        } catch (err) {
            console.error('Error copying content: ', err);
        }
    }
}
