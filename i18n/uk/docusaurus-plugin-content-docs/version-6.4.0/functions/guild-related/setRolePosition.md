---
title: '$setRolePosition'
description: '$setRolePosition will set a roles'' position.'
id: setRolePosition
---

`$setRolePosition` will set a roles' position.

## Використання

```php
$setRolePosition[roleID;position;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                    | Обов'язковий |
| -------- | ------- | ------------------------------------------------------- |:------------:|
| roleID   | integer | The ID of the role to modify.                           |     так      |
| position | number  | The new position of the role. (1 being the very bottom) |     так      |
| guildID? | integer | The ID of the guild of where the role is located in.    |      ні      |

## Приклад(и)

This will change a random role's position to `1` (the bot's highest role must be above that role):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```