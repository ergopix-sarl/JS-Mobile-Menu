# Mobile Menu

Display a simple one level mobile menu.

## Dependencies

 - jQuery

## Usage

### Include assets

Assets can be found in the dist/ directory of this repo.

> CSS should be placed in <code>head</code>, JS should be placed at the end of your document, before the <code>body</code> ending tag.

```
<link href="path/to/css/MobileMenu.min.css" rel="stylesheet">
<script src="path/to/js/MobileMenu.min.js"></script>
```

There is no need to initiate the plugin. It will look for a toggle button, see below.

### HTML

Include the your menu HTML at the end of your document.

```
<div id="MobileMenu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        ...
    </ul>
</div>
```

Add a toggle to show the menu.

```
<button data-toggle="MobileMenu" data-target="#MobileMenu">MENU</button>
```
