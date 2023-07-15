---
title: '$setGuildName'
description: '$setGuildName will change a guilds'' name.'
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## Використання

```php
$setGuildName[name;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                             | Обов'язковий |
| -------- | ------- | ------------------------------------------------ |:------------:|
| назва    | рядок   | The new guild name.                              |     так      |
| guildID? | integer | The ID of the guild whose name will be modified. |      ні      |

## Приклад(и)

This will change guild's name you're executing the command in to your username:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```