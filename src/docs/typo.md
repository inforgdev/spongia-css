# Typography elements

## *b*, *strong*

Set style to `bolder`.

* **Type:** normalization
* **Target:** Firefox 4+, Safari 5, Chrome

```scss
b,
strong {
	font-weight: bold;
}
```

## *dfn*

Set style not present.

* **Type:** normalization
* **Target:** Safari 5, Chrome

```scss
dfn {
	font-style: italic;
}
```

## *small*

Correct *font-size*.

* **Type:** normalization
* **Target:** all

```scss
small {
	font-size: 80%;
}
```

## *sup*, *sub*

Prevent `sub` and `sup` elements from affecting the line height.

* **Type:** normalization
* **Target:** all

```scss
sub, sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}
```

## *abbr[title]*

Reset the *text-decoration*.

* **Type:** normalization
* **Target:** Chrome, Edge, Safari

```scss
abbr[title] {
	text-decoration: underline dotted;
}
```

## Headings and Paragraph

Set *margin* of typography elements to *0* in all browsers.

* **Type:** reset
* **Target:** all

```scss
h1, h2, h3, h4, h5, h6,
p {
	margin: 0;
}
```
