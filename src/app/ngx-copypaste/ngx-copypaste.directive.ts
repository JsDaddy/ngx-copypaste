import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[ngxCopyPaste]',
  exportAs: 'copy'
})
export class NgxCopyPasteDirective {

  public constructor(
    private _elementRef: ElementRef
  ) {
  }


  public copy(): void {
    window.getSelection().removeAllRanges();
    const element: HTMLElement = this._elementRef.nativeElement;
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      this._elementRef.nativeElement.select();
    } else {
      const range: Range = document.createRange();
      range.selectNodeContents(this._elementRef.nativeElement);
      window.getSelection().addRange(range);
    }
    document.execCommand('copy');
  }

}
