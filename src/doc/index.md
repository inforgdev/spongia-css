# SpongiaCSS Doc

## About

Spongia CSS is a style resetter/normalizer for modern web browsers.

It makes a core base to build more easily the first steps.

### Features

* Minified;
* Support only for modern web browsers;
* Focused on common resets;
* Customizable, maintaining inheritance;
* Corrects bugs and common browser inconsistencies;
* Based on modern resetters/normalizers.

* Layout resets, like *border-sizing* as *box model*;
* No margin to typography related elements;
* Size reset to *media* elements;
* No native font stack.

## Installation

In NPM, download it from Github repository:

```bash
npm i -D inforgdev/spongia-css
```

## Usage

> **Note:** the import need to be the first CSS import.

Using a CSS loader, in JS:

```js
import 'spongia-css'
```

Or, in vanilla CSS:

```scss
@import 'node_modules/spongia-css/dist/spongia.min.css'
```

Or, in vanilla HTML:

```html
<link rel="stylesheet" href="node_modules/spongia-css/dist/spongia.min.css">
```

### Components

* [Form](./_form.md)
* [Layout](./_layout.md)
* [Media](./_media.md)
* [Typography](./_typo.md)
* [UI](./_ui.md)