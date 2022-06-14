# Form elements

## Inputs

1. Set *cursor* as if it were a button.
2. Remove border.
3. Remove padding.

* **Type:** reset
* **Target:** all

```scss
input {
	&[type=button],
	&[type=submit],
	&[type=reset] {
		cursor: pointer; /* 1 */
		border: none; /* 2 */
		padding: 0; /* 3 */
	}
}
```

## *button*, *input*, *optgroup*, *select*, *textarea*

1. 2. Change the font styles in all browsers.
3. Remove the margin.

* **Type:** 1. 2. normalization, 3. reset
* **Target:** 1. 2. all, 2. Firefox 4+, Safari 5, Chrome

```scss
button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 2 */
	margin: 0; /* 3 */
}
```

## Buttons

Correct the inability to style clickable types.

* **Type:** normalization
* **Target:** iOS, Safari

```scss
button,
[type='button'],
[type='reset'],
[type='submit'],
::-webkit-file-upload-button {
	-webkit-appearance: button;
}
```

## *::-webkit-file-upload-button*

Change font properties to 'inherit'.

* **Type:** normalization
* **Target:** Safari

```scss
::-webkit-file-upload-button {
	font: inherit;
}
```

[Previous](index.md)