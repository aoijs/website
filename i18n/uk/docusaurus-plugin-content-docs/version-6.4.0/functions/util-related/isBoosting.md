---
title: '$isBoosting'
description: '$isBoosting will check if the given user is boosting the given guild.'
id: isBoosting
---

`$isBoosting` will check if the given user is boosting the given guild.

## Використання

```php
$isBoosting[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                           | Обов'язковий |
| -------- | ------- | ---------------------------------------------- |:------------:|
| userID?  | integer | User ID to check if they're boosting.          |      ні      |
| guildID? | integer | The guild ID of where they boosted the server. |      ні      |

## Приклад(и)

This will return `false` or `true` depending on if you boosted this server:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
