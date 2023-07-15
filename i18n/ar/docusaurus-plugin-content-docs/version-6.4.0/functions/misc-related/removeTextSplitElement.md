---
title: '$removeTextSplitElement'
description: '$removeTextSplitElement will remove a specific text split element.'
id: removeTextSplitElement
---

`$removeTextSplitElement` will remove a specific text split element.

## الاستخدام

```php
$removeTextSplitElement[element]
```

## البارامترات

| Field   | النوع  | الديسكبربشين                  | مطلوب |
| ------- | ------ | ----------------------------- |:-----:|
| element | string | Text split element to remove. | true  |

## مثال

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```