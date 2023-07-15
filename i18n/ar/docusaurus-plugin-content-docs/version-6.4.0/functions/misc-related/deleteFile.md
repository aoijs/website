---
title: '$deleteFile'
description: '$deleteFile will delete a given file.'
id: deleteFile
---

`$deleteFile` will delete a given file.

## الاستخدام

```php
$deleteFile[path]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| path  | string | File path.   | true  |

## مثال

This will delete your `index.js` (don't actually do that):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```