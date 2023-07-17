---
title: '$userID'
description: '$userID devolverá la identificación de un usuario determinado.'
id: userID
---

`$userID` devolverá la ID de un usuario determinado.

## Uso

```php
$userID[usuario]
```

## Parámetros

| Campo   | Tipo           | Parámetros                                                       | Requerido |
| ------- | -------------- | ---------------------------------------------------------------- |:---------:|
| usuario | cadena, número | El ID del usuario del que desea que se devuelva el rol más alto. | verdadera |

## Ejemplo(s)

Esto devolverá tu ID de usuario:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
