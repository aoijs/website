---
title: '$image'
description: '$image will add an image to an embed.'
id: image
---

`$image` will add an image to an embed.

## Використання

```php
$image[index?;URL]
```

## Параметри

| Поле   | Тип    | Опис                            | Обов'язковий |
| ------ | ------ | ------------------------------- |:------------:|
| index? | number | Embed index                     |      ні      |
| URL    | рядок  | Embed Image URL. (bottom image) |     так      |

## Приклад(и)

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