---
title: '$thumbnail'
description: '$thumbnail add a thumbnail to an embed (upper right corner image).'
id: thumbnail
---

`$thumbnail` add a thumbnail to an embed (upper right corner image).

## Використання

```php
$thumbnail[index?;URL]
```

## Параметри

| Поле   | Тип    | Опис                  | Обов'язковий |
| ------ | ------ | --------------------- |:------------:|
| index? | number | Embed position/index. |      ні      |
| URL    | рядок  | Thumbnail Image URL.  |     так      |

## Приклад(и)

This will create an embed with your user avatar in it:

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`
});
```