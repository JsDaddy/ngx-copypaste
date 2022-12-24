import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NgxCopyPasteDirective } from './ngx-copypaste/ngx-copypaste.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

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
    public baseCode = `<input ngxCopyPaste #c="copy">
<button (click)="c.copy()" >Copy</button>`;

    public textAreaCode = `<textarea  ngxCopyPaste rows="1" #c="copy"></textarea>
<button  (click)="c.copy()" >Copy</button>`;

    public elementOwnCode = `<p ngxCopyPaste #c="copy">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
<button  (click)="c.copy()" >Copy</button>`;

    public allElementCode = `<div ngxCopyPaste #c="copy">
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
<button  (click)="c.copy()" >Copy</button>`;
}
