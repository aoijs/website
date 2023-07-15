---
title: '$getCooldownTime'
description: '$getCooldownTime will return the cooldown time of a given command.'
id: getCooldownTime
---

`$getCooldownTime` will return the cooldown time of a given command.

## Використання

```php
$getCooldownTime[time;type;command;id]
```

## Параметри

| Поле    | Тип     | Опис                                                                                                                                                    | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| time    | рядок   | The time of the cooldown.                                                                                                                               |     так      |
| тип     | рядок   | Cooldown type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** |     так      |
| command | рядок   | Command name.                                                                                                                                           |     так      |
| id      | integer | User/guild/channel/message ID.                                                                                                                          |     так      |

## Приклад(и)

This will return the remaining cooldown of the "getCooldownTime" command:

```javascript
bot.command({
    name: "getCooldownTime",
    code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `
});
```