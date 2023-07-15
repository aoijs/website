---
title: '$deleteSticker'
description: '$deleteSticker will delete a given sticker.'
id: deleteSticker
---

`$deleteSticker` will delete a given sticker.

## Використання

```php
$deleteSticker[guildID;sticker]
```

## Параметри

| Поле    | Тип     | Опис                                             | Обов'язковий |
| ------- | ------- | ------------------------------------------------ |:------------:|
| guildID | integer | The guild ID of where the sticker is located in. |     так      |
| sticker | рядок   | The name of the sticker.                         |     так      |

## Приклад(и)

This will delete a sticker of your guild ( make sure to provide an actual sticker name ):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```