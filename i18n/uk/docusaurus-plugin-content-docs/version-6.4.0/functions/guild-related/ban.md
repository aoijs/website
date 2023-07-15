---
title: '$ban'
description: '$ban will ban a user of a given guild.'
id: ban
---

`$ban` will ban a user of a guild.

## Використання

```php
$ban[guildID;userID;days?;reason?]
```

## Параметри

| Поле     | Тип     | Опис                                                            | Обов'язковий |
| -------- | ------- | --------------------------------------------------------------- |:------------:|
| guildID? | integer | From which guild the user should be banned from.                |     так      |
| userID   | integer | The user to ban.                                                |     так      |
| days?    | рядок   | Days of message history to delete, cannot be higher than 7 days |      ні      |
| reason?  | рядок   | The reason that will be displayed in the guild's audit logs.    |      ні      |

## Приклад(и)

This will ban a random user of your guild:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
