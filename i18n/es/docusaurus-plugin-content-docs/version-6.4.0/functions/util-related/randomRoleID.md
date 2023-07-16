---
title: '$randomRoleID'
description: '$randomRoleID devolverá un ID de rol aleatorio de un gremio dado.'
id: randomRoleID
---

`$randomRoleID` devolverá un ID de rol aleatorio de un gremio determinado.

## Uso

```php
$randomRoleID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                 | Requerido |
| ----------- | ------- | ------------------------------------------ |:---------:|
| servidorID? | integer | De donde devolverá el ID de rol aleatorio. | verdadera |

## Ejemplo(s)

Esto devolverá un ID de rol aleatorio de tu gremio:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
