---
title: '$memberExists'
description: '$memberExists check if a given user is member of the given guild.'
id: memberExists
---

`$memberExists` check if a given user is member of the given guild.

## Використання

```php
$memberExists[userID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                                               | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------------------------------- | ------------ |
| userID   | integer | id of the user you want to check if they're currently a member of the given server | так          |
| guildID? | integer | the server where the user is present in                                            | ні           |

## Приклад(и)

This will return `true` as you're currently in this guild:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
