---
title: '$reverse'
description: '$reverse will reverse given text.'
id: reverse
---

`$reverse` will reverse given text.

## الاستخدام

```php
$reverse[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين              | مطلوب |
| ----- | ------ | ------------------------- |:-----:|
| text  | string | Text you want to reverse. | true  |

## مثال

This will the following text readable:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```