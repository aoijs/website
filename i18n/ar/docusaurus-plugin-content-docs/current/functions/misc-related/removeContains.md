---
title: '$removeContains'
description: '$removeContains will remove specific text from a give text.'
id: removeContains
---

`$removeContains` will remove specific text from a give text.

## الاستخدام

```php
$removeContains[content;...words]
```

## البارامترات

| Field    | النوع  | الديسكبربشين                         | مطلوب |
| -------- | ------ | ------------------------------------ |:-----:|
| content  | string | Text where to remove the words from. | true  |
| ...words | string | Text to remove from the text.        | true  |

## Example(s)

This will remove the word "aoi.js from the given text:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```