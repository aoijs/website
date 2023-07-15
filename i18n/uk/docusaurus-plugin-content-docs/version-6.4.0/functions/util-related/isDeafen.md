---
title: '$isDeafen'
description: '$isDeafen will check if a certain user is deafened or not.'
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## Використання

```php
$isDeafen[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                      | Обов'язковий |
| -------- | ------- | --------------------------------------------------------- |:------------:|
| userID?  | integer | User ID you want to check if they're deafened,            |      ні      |
| guildID? | integer | The guild ID where you want to check if they're deafened. |      ні      |

## Приклад(и)

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
