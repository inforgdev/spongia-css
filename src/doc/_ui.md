# UI elements

## *:-moz-ui-invalid*

Remove the additional ':invalid' styles.

* **Type:** normalization
* **Target:** Firefox

* **References:**
    * https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737

```scss
:-moz-ui-invalid {
	box-shadow: none;
}
```

[Previous](index.md)