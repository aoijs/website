---
title: '$title'
description: '$title add a title to an embed.'
id: title
---

`$title` add a title to an embed.

## Використання

```php
$title[index?;title;URL?]
```

## Параметри

| Поле   | Тип    | Опис                             | Обов'язковий |
| ------ | ------ | -------------------------------- |:------------:|
| index? | number | The index of the embed.          |      ні      |
| title  | рядок  | The content of the embed title.  |     так      |
| URL?   | рядок  | URL which will be the hyperlink. |      ні      |

## Приклад(и)

This will create an embed with a title:

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`
});
```