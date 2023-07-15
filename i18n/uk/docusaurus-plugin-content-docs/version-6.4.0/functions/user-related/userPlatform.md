---
title: '$userPlatform'
description: '$userPlatform will return the platform which the user is using Discord with.'
id: userPlatform
---

`$userPlatform` will return the platform which the user is using Discord with.

## Використання

```php
$userPlatform[userID?;guildID?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                          | Обов'язковий |
| -------- | ------- | --------------------------------------------- |:------------:|
| userID?  | integer | ID of the user.                               |      ні      |
| guildID? | integer | The guild ID of where the user is present in. |      ні      |
| sep?     | рядок   | The separator to split multiple platforms.    |      ні      |

### Platforms:
- **web** - The user is currently using the web client.
- **mobile** - The user is using the mobile app.
- **desktop** - The user is using the desktop app.
- **none** - The user is either offline, or unable to fetch the platform.

## Приклад(и)

This will return your platform you're using Discord on:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
