---
title: '$image'
description: '$image will add an image to an embed.'
id: image
---

`$image` will add an image to an embed.

## الاستخدام

```php
$image[index?;URL]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                    | مطلوب |
| ------ | ------ | ------------------------------- |:-----:|
| index? | number | Embed index                     | false |
| URL    | string | Embed Image URL. (bottom image) | true  |

## مثال

This will create an embed with an image, title and footer:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```