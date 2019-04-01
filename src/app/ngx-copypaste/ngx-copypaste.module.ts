import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxCopyPasteDirective} from './ngx-copypaste.directive';

@NgModule({
  declarations: [NgxCopyPasteDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxCopyPasteDirective]
})
export class NgxCopyPasteModule {
}
