---
title: '$editTextSplitElement'
description: '$editTextSplitElement will edit a specific text split element.'
id: editTextSplitElement
---

`$editTextSplitElement` will edit a specific text split element.

## الاستخدام

```php
$editTextSplitElement[index;text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                     | مطلوب |
| ----- | ------ | -------------------------------- |:-----:|
| index | string | Index of the text split element. | true  |
| text  | string | New text split element.          | true  |

## مثال

This will edit the 3rd text split element and change it to "Goodbye":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```