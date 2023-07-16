---
title: '$isUserDmEnabled'
description: '$isUserDmEnabled comprobará si los mensajes directos del usuario están deshabilitados o habilitados.'
id: isUserDmEnabled
---

`$isUserDmEnabled` comprobará si los mensajes directos del usuario están deshabilitados o habilitados.

## Uso

```php
$isUserDmEnabled[userID]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                            | Requerido |
| -------- | ------- | --------------------------------------------------------------------- |:---------:|
| usarioID | integer | ID del usuario que desea comprobar si sus dms están habilitados o no. | verdadera |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de si tus mensajes directos están habilitados o deshabilitados:

```javascript
bot.command({
    name: 'isUserDmEnabled',
    code: `
  $isUserDmEnabled[$authorID]
  `
});
```
