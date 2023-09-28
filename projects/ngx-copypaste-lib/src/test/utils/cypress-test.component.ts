import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'jsdaddy-open-source-test',
    template: `
        <input
            id="masked"
            ngxCopyPaste
            #cv="copy"
            (successCb)="copy($event)"
            [formControl]="form" />
        <button (click)="cv.copy()" id="btn">Copy</button>
        <pre id="pre">{{ copied }}</pre>
    `,
})
export class CypressTestMaskComponent {
    public form: FormControl = new FormControl('');

    public copied: boolean = false;
    public copy(event: boolean): void {
        this.copied = event;
    }
}
