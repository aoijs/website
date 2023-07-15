---
title: '$joinSplitText'
description: '$joinSplitText will join all text split elements by a given separator.'
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## الاستخدام

```php
$joinSplitText[sep?]
```

## البارامترات

| Field | النوع   | الديسكبربشين                                    | مطلوب |
| ----- | ------- | ----------------------------------------------- |:-----:|
| sep?  | Integer | Separator to separate multiple returned values. | false |

## مثال

This will join all text split elements with a comma:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```