---
title: '$createFile'
description: '$createFile will create a file attachment.'
id: createFile
---

`$createFile` will create a file attachment.

## الاستخدام

```php
$createFile[attachment;name]
```

## البارامترات

| Field      | النوع  | الديسكبربشين                | مطلوب |
| ---------- | ------ | --------------------------- |:-----:|
| attachment | string | Content of the file.        | true  |
| name       | string | The name of the attachment. | true  |

## مثال

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
