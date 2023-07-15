---
title: '$kick'
description: '$kick will remove a user from a given guild.'
id: kick
---

`$kick` will remove a user from a given guild.

## Використання

```php
$kick[guildID;userID;reason?]
```

## Параметри

| Поле    | Тип     | Опис                                                          | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------- |:------------:|
| guildID | integer | The ID of the guild where the user shall be removed from.     |     так      |
| userID  | integer | The ID of the user which will be removed from the guild.      |     так      |
| reason? | рядок   | The reason which will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will kick someone from your guild:

```javascript
bot.command({
    name: 'kick',
    code: `
  <@$findMember[$message;false]> has been kicked!
  $kick[$guildID;$findMember[$message;false];Example reason!]
  `
});
```
