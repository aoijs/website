---
title: '$getBanReason'
description: '$getBanReason will return a ban reason of an specific user.'
id: getBanReason
---

`$getBanReason` will return a ban reason of an specific user.

## Modo de uso

```php
$getBanReason[guildID?;userID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                   | Requerido |
| ----------- | ------ | ------------------------------------------------------------ |:---------:|
| servidorID? | entero | The guild ID.                                                |    no     |
| usarioID?   | entero | The user ID of the user you want to check the ban reason of. |    no     |

## Ejemplo(s)

This will return the ban reason of whoever you'd like:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  $getBanReason[$guildID;userID] 
  ` // make sure to replace "userID" with an actual user ID
});
```