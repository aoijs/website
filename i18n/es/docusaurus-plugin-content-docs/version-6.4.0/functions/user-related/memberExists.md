---
title: '$memberExists'
description: '$memberExists check if a given user is member of the given guild.'
id: memberExists
---

`$memberExists` check if a given user is member of the given guild.

## Modo de uso

```php
$memberExists[userID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                         | Requerido |
| ----------- | ------ | ---------------------------------------------------------------------------------- | --------- |
| usarioID    | entero | id of the user you want to check if they're currently a member of the given server | verdadero |
| servidorID? | entero | the server where the user is present in                                            | no        |

## Ejemplo(s)

This will return `true` as you're currently in this guild:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
