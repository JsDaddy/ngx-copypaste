<a href="http://jsdaddy.io/img/logo.png">
  <h1 align="center">NGX COPYPASTE</h1>
</a>

<p align="center">
  NGX COPYPASTE is the best directive to copy any content on any element
</p>

[![CI](https://github.com/JsDaddy/ngx-copypaste/actions/workflows/quality-check.yml/badge.svg?branch=develop)](https://github.com/JsDaddy/ngx-copypaste/actions/workflows/main.yml)
[![npm](https://img.shields.io/npm/v/ngx-copypaste.svg)](https://www.npmjs.com/package/ngx-copypaste)
[![npm downloads](https://img.shields.io/npm/dt/ngx-copypaste.svg)](https://npmjs.org/ngx-copypaste)

[![npm](https://img.shields.io/npm/dm/ngx-copypaste.svg)](https://www.npmjs.com/package/ngx-copypaste)

[![GitHub contributors](https://img.shields.io/github/contributors/JSDaddy/ngx-copypaste.svg?style=flat)](https://github.com/JSDaddy/ngx-copypaste)

[![GitHub stars](https://img.shields.io/github/stars/JSDaddy/ngx-copypaste.svg?label=GitHub%20Stars&style=flat)](https://github.com/JSDaddy/ngx-copypaste)

You can also try our NGX MASK [check](https://www.npmjs.com/package/ngx-mask) it.
You can also try our NGX LOADER INDICATOR [check](https://www.npmjs.com/package/ngx-loader-indicator) it.
### You can try live  [demo](https://jsdaddy.github.io/ngx-copypaste/) with examples.

## Installing
```bash
$ npm install --save ngx-copypaste 
```

## Quickstart if ngx-copypaste version >= 15.0.0

Pay attention this version works for angular >= 14.0.0

Import **ngx-copypaste** directive to your standalone component

```typescript
@Component({
  selector: 'ngx-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    (...)
    NgxCopyPasteDirective,
    (...)
  ],
})
export class AppComponent {
    (...)
}
```

## Quickstart if ngx-copypaste version < 15.0.0

Pay attention this version works for angular < 15.0.0

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
Output success cb

```html
<p ngxCopyPaste #cp="copy" (successCb)="copy()">Lorem ipsum</p>

<p (click)="cp.copy()">Copy</p>

public copy(): void {
    your code
}
```                         
