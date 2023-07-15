---
title: '$randomRoleID'
description: '$randomRoleID will return a random role ID of a given guild.'
id: randomRoleID
---

`$randomRoleID` will return a random role ID of a given guild.

## Використання

```php
$randomRoleID[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                          | Обов'язковий |
| -------- | ------- | --------------------------------------------- |:------------:|
| guildID? | integer | Where it will return the random role ID from. |     так      |

## Приклад(и)

This will return a random role ID of your guild:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
