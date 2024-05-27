import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
    selector: '[ngxCopyPaste]',
    exportAs: 'copy,ngxCopy',
    standalone: true,
})
export class NgxCopyPasteDirective {
    public successCb = output();

    private readonly _elementRef = inject(ElementRef);

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
                    ? element.value
                    : element.textContent;
            if (!value) {
                return;
            }
            await navigator.clipboard.writeText(value.trim());
            this.successCb.emit();
        } catch (err) {
            console.error('Error copying content: ', err);
        }
    }
}
