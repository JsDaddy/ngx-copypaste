import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[ngxCopyPaste]',
    exportAs: 'copy,ngxCopy',
    standalone: true,
})
export class NgxCopyPasteDirective {
    @Output()
    public successCb: EventEmitter<void> = new EventEmitter<void>();
    public constructor(private _elementRef: ElementRef) {}

    public copy(): void {
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
}
