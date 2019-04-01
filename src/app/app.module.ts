import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxCopyPasteModule} from './ngx-copypaste/ngx-copypaste.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCopyPasteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
