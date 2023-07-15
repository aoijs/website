---
title: '$advancedTextSplit'
description: '$advancedTextSplit will split multiple given arguments.'
id: advancedTextSplit
---

`$advancedTextSplit` will split multiple given arguments.

## الاستخدام

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## البارامترات

| Field | النوع   | الديسكبربشين                                      | مطلوب |
| ----- | ------- | ------------------------------------------------- |:-----:|
| text  | string  | Text to split.                                    | true  |
| sep   | string  | Separator which is used to split the values.      | true  |
| index | Integer | The position of the text you want to be returned. | true  |

## مثال

This will split `Hello` from `Bye` and return `Hello`:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
