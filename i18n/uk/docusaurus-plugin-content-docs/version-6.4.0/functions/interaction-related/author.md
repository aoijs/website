---
title: '$author'
description: '$author will add an author field to an embed.'
id: author
---

`$author` will add an author field to an embed.

## Використання

```php
$author[index?;name;iconURL?]
```

## Параметри

| Поле     | Тип     | Опис                                                       | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------- |:------------:|
| index?   | integer | Embed index.                                               |      ні      |
| назва    | рядок   | Author title that will be displayed.                       |     так      |
| iconURL? | рядок   | Icon URL which will be displayed next to the author title. |      ні      |

## Приклад(и)

This will create an embed with description and author title:

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Hello!;$userAvatar[$authorID]]
  $description[Embed with author!]
  `
});
```
