import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxCopyPasteDirective } from 'ngx-copypaste';

@Component({
    selector: 'jsdaddy-open-source-test',
    standalone: true,
    imports: [ReactiveFormsModule, NgxCopyPasteDirective],
    template: `
        <input id="masked" ngxCopyPaste #cv="copy" (successCb)="copy()" [formControl]="form" />
        <button (click)="cv.copy()" id="btn">Copy</button>
        <pre id="pre">{{ copied }}</pre>
    `,
})
export class CypressTestMaskComponent {
    public form: FormControl = new FormControl('');

    public copied = false;
    public copy(): void {
        this.copied = true;
    }
}
