---
title: Hyperlink
description: Setting a Hyperlink in an embed's description.
---

### Usage

```php
[Text Field](link 'Hover Field')
```

> `link` refers to an actual website link

> `Hover Field` can be anything you want

### Usage Example

```php
[aoi.js website](https://aoi.js.org 'aoi.js link')
```

> Hyperlinks only work inside $description and embed fields.

### Example

```javascript
bot.command({
name: "hyperlink", 
code: `
$description[[Package](https://www.npmjs.com/package/aoi.js 'click')]` 
})
```