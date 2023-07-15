---
title: '$description'
description: '$description is used for embeds to add an description field.'
id: الديسكبربشين
---

`$description` is used for embeds to add an description field.

## الاستخدام

```php
$description[index?;description]
```

## البارامترات

| Field        | النوع  | الديسكبربشين                           | مطلوب |
| ------------ | ------ | -------------------------------------- |:-----:|
| index?       | number | The embed index.                       | false |
| الديسكبربشين | string | The content of the embeds description. | true  |

## مثال

This will send an embed with the content `aoi.js is great!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```