---
title: '$renameFile'
description: '$renameFile will rename a file of your bot''s directory.'
id: renameFile
---

`$renameFile` will rename a file of your bot's directory.

## الاستخدام

```php
$renameFile[oldFile;newFile]
```

## البارامترات

| Field   | النوع  | الديسكبربشين   | مطلوب |
| ------- | ------ | -------------- |:-----:|
| oldFile | string | Old file name. | true  |
| newFile | string | New file name. | true  |

## مثال

This will change your index.js to a index.txt file:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```