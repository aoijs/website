---
title: '$description'
description: '$description is used for embeds to add an description field.'
id: опис
---

`$description` is used for embeds to add an description field.

## Використання

```php
$description[index?;description]
```

## Параметри

| Поле   | Тип    | Опис                                   | Обов'язковий |
| ------ | ------ | -------------------------------------- |:------------:|
| index? | number | The embed index.                       |      ні      |
| опис   | рядок  | The content of the embeds description. |     так      |

## Приклад(и)

This will send an embed with the content `aoi.js is great!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```