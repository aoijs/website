---
title: '$userStatus'
description: '$userStatus will return a user''s presence.'
id: userStatus
---

`$userStatus` will return a user's presence.

## Використання

```php
$userStatus[guildId?;userId?]
```

## Параметри

| Поле     | Тип     | Опис                                                            | Обов'язковий |
| -------- | ------- | --------------------------------------------------------------- |:------------:|
| guildId? | integer | The guild ID of which guild you want to retrieve the status of. |      ні      |
| userId?  | integer | The ID of the user you want to return the status of.            |      ні      |

## Приклад(и)

This will either return `idle`, `online`, `invisible` or `dnd` depending on your current presence:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
