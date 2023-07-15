---
title: '$readFile'
description: '$readFile will read a file''s content and return it.'
id: readFile
---

`$readFile` will read a file's content and return it.

## الاستخدام

```php
$readFile[path]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| path  | string | File path.   | true  |

## مثال

This will return your main file (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```