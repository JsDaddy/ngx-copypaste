import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCopyPasteDirective } from 'ngx-copypaste';
import { CypressTestMaskComponent } from './cypress-test.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxCopyPasteDirective],
    declarations: [CypressTestMaskComponent],
    exports: [CypressTestMaskComponent],
})
export class CypressTestMaskModule {}
