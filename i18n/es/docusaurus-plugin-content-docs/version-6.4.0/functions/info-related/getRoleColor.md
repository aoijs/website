---
title: '$getRoleColor'
description: '$getRoleColor devolverá el color del rol dado.'
id: getRoleColor
---

`$getRoleColor` devolverá el color del rol dado.

## Modo de uso

```php
$getRoleColor[rolId;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                              | Requerido |
| ----------- | ------ | ------------------------------------------------------- |:---------:|
| rolId       | entero | El ID del rol del que quieres que se devuelva el color. | verdadero |
| servidorID? | entero | ID del servidor en el que existe el rol.                |    no     |

## Ejemplo(s)

Esto devolverá el ID de rol de su rol más alto:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$userHighestRole]
  `
});
```