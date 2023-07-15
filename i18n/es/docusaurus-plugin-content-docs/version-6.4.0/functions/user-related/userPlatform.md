---
title: '$userPlatform'
description: '$userPlatform will return the platform which the user is using Discord with.'
id: userPlatform
---

`$userPlatform` will return the platform which the user is using Discord with.

## Modo de uso

```php
$userPlatform[userID?;guildID?;sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                    | Requerido |
| ----------- | ------ | --------------------------------------------- |:---------:|
| usarioID?   | entero | ID of the user.                               |    no     |
| servidorID? | entero | The guild ID of where the user is present in. |    no     |
| sep?        | string | The separator to split multiple platforms.    |   falso   |

### Platforms:
- **web** - The user is currently using the web client.
- **mobile** - The user is using the mobile app.
- **desktop** - The user is using the desktop app.
- **none** - The user is either offline, or unable to fetch the platform.

## Ejemplo(s)

This will return your platform you're using Discord on:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
