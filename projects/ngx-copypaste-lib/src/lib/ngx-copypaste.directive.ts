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
        const element = this._elementRef.nativeElement as HTMLElement;
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            element.select();
        } else {
            const range: Range = document.createRange();
            range.selectNodeContents(element);
            select = window.getSelection();
            if (select) {
                select.addRange(range);
            }
        }
        this.successCb.emit();
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        document.execCommand('copy');
    }

    public async copy(): Promise<void> {
        this.copyWithSelection();
        try {
            if (typeof navigator.clipboard === 'undefined') {
                this.copyWithSelection();
                return;
            }
            const element = this._elementRef.nativeElement as HTMLElement;
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
            // eslint-disable-next-line no-console
            console.error('Error copying content: ', err);
        }
    }
}
