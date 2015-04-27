unindentor.js
===============

A small library to remove indentation from `textarea` and `contenteditable` elements.

```html
<textarea class="unindent">
		.main {
				max-width: 980px;
		}
</textarea>
<script src="unindentor.js"></script>
<script>
	unindentor.unindentElementList('.unindent');
</script>
```

