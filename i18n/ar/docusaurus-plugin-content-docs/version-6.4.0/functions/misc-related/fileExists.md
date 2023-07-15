---
title: '$fileExists'
description: '$fileExists will check if a given file exists.'
id: fileExists
---

`$fileExists` will check if a given file exists.

## الاستخدام

```php
$fileExists[path]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| path  | string | File path.   | true  |

## مثال

This will check if a file called `index.js` exists in your directory:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```