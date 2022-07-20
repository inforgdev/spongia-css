# Layout elements

## *html*

1. Set *background-repeat* to *no-repeat* in cascading by default on all elements and pseudoelements.
2. Set *border-sizing* to *border-box* in cascading by default on all elements and pseudoelements.
3. Reset the *line-height* in all browsers.
4. Prevent adjustments of font size after orientation changes in iOS.

* **Type:** reset, normalization
* **Target:** 3. all, 4. iOS

* **References:**
	* 2. http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

```scss
html {
	background-repeat: no-repeat; /* 1 */
	box-sizing: border-box; /* 2 */
	line-height: 1.5; /* 3 */
	-webkit-text-size-adjust: 100%; /* 4 */
}
```

## *\*, \*::before, \*::after*

1. Handle *background-repeat* while better addressing child elements.
2. Handle *box-sizing* while better addressing child elements.
3. Handle *line-height* while better addressing child elements.

```scss
*, *::before, *::after {
	box-sizing: inherit; /* 1 */
	background-repeat: inherit; /* 2 */
	line-height: inherit; /* 3 */
}
```

## *html, body*

Set *html* and *body* to full height.

* **Type:** reset
* **Target:** all

```scss
html, body {
    height: 100%;
}
```

## *body*

Set *body* *margin* to 0 in all browsers.

* **Type:** reset
* **Target:** all

```scss
body {
	margin: 0;
}
```

## *hr*

1. Reset *height*.
2. Reset the inheritance of border color.

* **Type:** normalization
* **Target:** Firefox

* **References:** 
	* https://bugzilla.mozilla.org/show_bug.cgi?id=190655

```scss
hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}
```

## *table*

1. Remove text indentation from table contents.
2. Reset table border color inheritance.
3. Set *border-collapse* to *collapse* as default.

* **Type:** normalization; 3. reset
* **Target:** Chrome, Safari

* **References:**
	* 1. https://bugs.chromium.org/p/chromium/issues/detail?id=999088
	* 1. https://bugs.webkit.org/show_bug.cgi?id=201297
	* 2. https://bugs.chromium.org/p/chromium/issues/detail?id=935729
	* 2. https://bugs.webkit.org/show_bug.cgi?id=195016

```scss
table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
	border-collapse: collapse; /* 3 */
}

td, th {
	padding: 0;
}
```

## *summary*

Reset *summary* *display* style.

* **Type:** normalization
* **Target:** Chrome, Safari

```scss
summary {
	display: list-item;
}
```

## Navigation List

Remove the default list style in *nav*.

* **Type:** reset
* **Target:** all

```scss
nav ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
```
