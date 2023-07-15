---
title: '$displayName'
description: '$displayName will return the display name of a given user.'
id: displayName
---

`$displayName` will return the display name of a given user.

## Використання

```php
$displayName[guildID?;userID?;returnUser?]
```

## Параметри

| Поле        | Тип     | Опис                                                                             | Обов'язковий |
| ----------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                             |      ні      |
| userID?     | integer | The ID of the user.                                                              |      ні      |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will return your displayName, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'displayName',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
