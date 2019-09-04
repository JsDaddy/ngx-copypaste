<a href="https://jsdaddy.github.io/ngx-copypaste/">
  <h1 align="center">ngx-copypaste</h1>
</a>

[![npm](https://img.shields.io/npm/v/ngx-copypaste.svg)](https://www.npmjs.com/package/ngx-copypaste)
<a href="https://npmjs.org/ngx-copypaste">
  <img src="https://img.shields.io/npm/dt/ngx-copypaste.svg" alt="npm downloads" >
</a>
[![npm](https://img.shields.io/npm/dm/ngx-copypaste.svg)](https://www.npmjs.com/package/ngx-copypaste)
[![GitHub contributors](https://img.shields.io/github/contributors/JSDaddy/ngx-copypaste.svg?style=flat-square)](https://github.com/JSDaddy/ngx-copypaste)
[![GitHub stars](https://img.shields.io/github/stars/JSDaddy/ngx-copypaste.svg?label=GitHub%20Stars&style=flat-square)](https://github.com/JSDaddy/ngx-copypaste)
<br>
You can also try our NGX MASK [Download](https://www.npmjs.com/package/ngx-mask) it.
You can also try our NGX LOADER INDICATOR [Download](https://www.npmjs.com/package/ngx-loader-indicator) it.
### You can see the full [documentation](https://jsdaddy.github.io/ngx-copypaste/) with examples.
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
