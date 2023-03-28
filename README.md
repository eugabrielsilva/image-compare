# image-compare
A very simple image comparison plugin (before/after) in pure JS.

### Demo
https://codepen.io/eugabrielsilva/pen/PodgoQB

### Usage
Include the CSS in your `<head>` tag.

```html
<link rel="stylesheet" href="image-compare.min.css">
```

Include the JS script before your `</body>` closing tag.

```html
<script src="image-compare.min.js"></script>
```

Add the `.image-compare` class to a container with the before/after images.

**Do not put anything else inside the container or it will break the plugin.**

```html
<div class="image-compare">
    <img src="before.jpg">
    <img src="after.jpg">
</div>
```

### Customization
In order to change the "Before" and "After" labels, use the `data-before-label` and `data-after-label` attributes in the container.

```html
<div class="image-compare" data-before-label="Antes" data-after-label="Depois">
    <img src="before.jpg">
    <img src="after.jpg">
</div>
```

If you want to modify the style, override one of the available CSS classes:

- `.image-compare` - The main plugin container.
- `.image-compare-label` - "Before" and "After" labels.
- `.image-compare-image` - Each image.
- `.image-compare-handle` - The interactive handle. The arrows are inside a pseudo `::before` element in this class.

### Credits
Developed by [Gabriel Silva](https://eugabrielsilva.tk).