---
title: '$cropText'
description: '$cropText will crop given text.'
id: cropText
---

`$cropText` is used to crop given text.

## الاستخدام

```php
$cropText[text;limit;start?]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                                             | مطلوب |
| ------ | ------ | ------------------------------------------------------------------------ |:-----:|
| text   | string | Text you want to slice.                                                  | true  |
| limit  | number | Limit of the cropped text/will start to crop any text coming after that. | true  |
| start? | number | Where cropping should start.                                             | false |

## مثال

This will return `bye` and remove `hello and` from the given text:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
