---
title: '$isBot'
description: '$isBot comprobará si el usuario dado es un bot.'
id: isBot
---

`$isBot` comprobará si el usuario dado es un bot.

## Uso

```php
$isBot[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros                               | Requerido |
| --------- | ------- | ---------------------------------------- |:---------:|
| usarioID? | integer | Id de usuario para comprobar si son bot. |    no     |

## Ejemplo(s)

Esto devolverá `verdadero` como tu bot es, obviamente, un bot:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
