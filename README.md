<a href="#">
  <h1 align="center">ngx-copypaste</h1>
</a>

## Installing
```bash
$ npm install --save ngx-copypaste 
```

## Quickstart

Import **ngx-copypaste** module in Angular app.

```typescript
import {NgxCopyPasteModule} from 'ngx-copypaste'

(...)

@NgModule({
  (...)
  imports: [
    NgxCopyPasteModule
  ]
  (...)
})
```
#### Usage

From input

```html
<input type='text' ngxCopyPaste #cp="copy"/>

<button (click)="cp.copy()">Copy</button>
```

From any HTML tag

```html
<p ngxCopyPaste #cp="copy">Lorem ipsum</p>

<button (click)="cp.copy()">Copy</button>
```

From complex div

```html
<div ngxCopyPaste #cp="copy">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit.
 Nullam rutrum augue at ante sollicitudin posuere.
 Pellentesque congue consequat enim quis luctus.</p>
  <div>
    <h2>Lorem ipsum</h2>
  </div>
</div>

<button (click)="cp.copy()">Copy</button>
```
Also you can bind it to any tag

```html
<p ngxCopyPaste #cp="copy">Lorem ipsum</p>

<p (click)="cp.copy()">Copy</p>
```
