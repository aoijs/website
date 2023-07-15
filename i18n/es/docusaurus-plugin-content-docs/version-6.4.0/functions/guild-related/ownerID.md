---
title: '$ownerID'
description: '$ownerID devolverá el ID del propietario del servidor, dependiendo del argumento dado.'
id: ownerID
---

`$ownerID` +devolverá el ID del propietario del servidor, dependiendo del argumento dado.

## Uso

```php
$ownerID[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros       | Requerido |
| ----------- | ------- | ---------------- |:---------:|
| servidorID? | integer | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá el ID del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```
