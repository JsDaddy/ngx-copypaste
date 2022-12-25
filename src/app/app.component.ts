import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxCopyPasteDirective } from 'ngx-copypaste';

@Component({
    selector: 'ngx-copypaste-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        MatFormFieldModule,
        HighlightModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        HeaderComponent,
        NgxCopyPasteDirective,
    ],
})
export class AppComponent {
    public baseCode = `<input ngxCopyPaste #cp="copy">
<button (click)="cp.copy()" >Copy</button>`;

    public textAreaCode = `<textarea  ngxCopyPaste rows="1" #cp="copy"></textarea>
<button  (click)="cp.copy()" >Copy</button>`;

    public elementOwnCode = `<p ngxCopyPaste #cp="copy">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
<button  (click)="cp.copy()" >Copy</button>`;

    public allElementCode = `<div ngxCopyPaste #cp="copy">
  <h1>Lorem ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    rutrum augue at ante sollicitudin posuere. Pellentesque congue
    consequat enim quis luctus.
  </p>
  <div>
    <h2>Lorem ipsum</h2>
  </div>
</div>
<button  (click)="cp.copy()" >Copy</button>`;
}