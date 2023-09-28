import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

export interface ICopyPasteResponse {
    isSuccess: boolean;
}

@Directive({
    selector: '[ngxCopyPaste]',
    exportAs: 'copy,ngxCopy',
    standalone: true,
})
export class NgxCopyPasteDirective {
    @Output()
    public successCb: EventEmitter<ICopyPasteResponse> = new EventEmitter<ICopyPasteResponse>();
    public constructor(private _elementRef: ElementRef) {}

    public copy(): void {
        let select: Selection | null = window.getSelection();
        if (select) {
            select.removeAllRanges();
        }
        const element: HTMLElement = this._elementRef.nativeElement;
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            this.successCb.emit({ isSuccess: true });
            this._elementRef.nativeElement.select();
        } else {
            const range: Range = document.createRange();
            range.selectNodeContents(this._elementRef.nativeElement);
            select = window.getSelection();
            if (select) {
                this.successCb.emit({ isSuccess: true });
                select.addRange(range);
            }
        }
        document.execCommand('copy');
    }
}
