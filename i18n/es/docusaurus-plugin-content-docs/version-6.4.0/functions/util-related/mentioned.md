---
title: '$mentioned'
description: '$mentioned devolverá el ID de un usuario de la mención.'
id: mentioned
---

`$mentioned` devolverá el ID de un usuario de la mención.

## Uso

```php
$mentioned[index;returnSelf?]
```

## Parámetros

| Campo         | Tipo    | Parámetros                                                | Requerido |
| ------------- | ------- | --------------------------------------------------------- |:---------:|
| índice        | número  | El índice del argumento.                                  | verdadero |
| ¿volver a Sí? | boolean | Devuelve el ID del autor si el usuario no fue encontrado. |    no     |

## Ejemplo(s)

Esto devolverá la ID de la **primera** mención si intenta mencionar a alguien en este comando, o de lo contrario devuelve tu ID:

```javascript
bot.command({
    name: 'mentioned',
    code: `
  $mentioned[1;true]
  `
});
```
