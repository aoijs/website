---
title: '$setGuildIcon'
description: '$setGuildIcon will change a guilds'' icon.'
id: setGuildIcon
---

`$setGuildIcon` will change a guilds' icon.

## Використання

```php
$setGuildIcon[URL;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                         | Обов'язковий |
| -------- | ------- | -------------------------------------------- |:------------:|
| URL      | рядок   | URL of the new guild Icon.                   |     так      |
| guildID? | integer | The guild ID of where to set the guild Icon. |      ні      |

## Приклад(и)

This will change guild's icon you're executing the command in to your user avatar:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```