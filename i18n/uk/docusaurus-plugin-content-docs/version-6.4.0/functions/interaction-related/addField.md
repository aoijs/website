---
title: '$addField'
description: '$addField will add a field in an embed.'
id: addField
---

`$addField` will add a field in an embed.

## Використання

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## Параметри

| Поле              | Тип     | Опис                          | Обов'язковий |
| ----------------- | ------- | ----------------------------- |:------------:|
| fieldTitle?       | рядок   | The title of the field.       |     так      |
| fieldDescription? | рядок   | The description of the field. |     так      |
| inline?           | boolean | If the field is inline.       |      ні      |

## Приклад(и)

This will send an embed with a field and description:

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Example;Look at this!;false]
  $description[Hello!]
  `
});
```
