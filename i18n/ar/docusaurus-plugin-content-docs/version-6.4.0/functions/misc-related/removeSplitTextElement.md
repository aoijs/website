---
title: '$removeSplitTextElement'
description: '$removeSplitTextElement will remove a specific split text element.'
id: removeSplitTextElement
---

`$removeSplitTextElement` will remove a specific split text element.

## الاستخدام

```php
$removeSplitTextElement[...elements]
```

## البارامترات

| Field       | النوع  | الديسكبربشين                   | مطلوب |
| ----------- | ------ | ------------------------------ |:-----:|
| ...elements | string | Split text elements to remove. | true  |

## مثال

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```