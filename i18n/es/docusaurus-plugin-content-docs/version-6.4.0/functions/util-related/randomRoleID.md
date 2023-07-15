---
title: '$randomRoleID'
description: '$randomRoleID will return a random role ID of a given guild.'
id: randomRoleID
---

`$randomRoleID` will return a random role ID of a given guild.

## Modo de uso

```php
$randomRoleID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                    | Requerido |
| ----------- | ------- | --------------------------------------------- |:---------:|
| servidorID? | integer | Where it will return the random role ID from. | verdadera |

## Ejemplo(s)

This will return a random role ID of your guild:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
