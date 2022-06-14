# About

Spongia CSS is a style resetter/normalizer for modern web browsers.

It makes a core base to build more easily the first steps.

## Features

* Minified;
* Support only for modern web browsers;
* Focused on common resets;
* Corrects bugs and common browser inconsistencies;
* Customizable, maintaining inheritance;
* Based on the modern resetters/normalizers.

* Layout resets, like *border-sizing* as *box model*;
* No margin to typography related elements;
* Size reset to *media* elements;
* No native font stack.

# Download

## NPM

```bash
npm i -D https://github.com/inforgdev/spongia-css
```

# Usage

This need to be the first CSS.

In Javascript, using a CSS loader, import it:

```js
import 'spongia-css'
```

Or, in vanilla CSS:

```css
@import 'node_modules/spongia-css/dist/spongia.min.css'
```

Or, in vanilla HTML:

```html
<link rel="stylesheet" href="node_modules/spongia-css/dist/spongia.min.css">
```

## Components

* [Form](_form.md)
* [Layout](_layout.md)
* [Media](_media_.md)
* [Typography](_typo.md)
* [UI](_ui_.md)