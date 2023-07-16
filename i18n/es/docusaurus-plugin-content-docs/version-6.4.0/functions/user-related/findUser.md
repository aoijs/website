---
title: '$findUser'
description: '$findUser intentará encontrar un usuario que coincida con la consulta dada.'
id: findUser
---

`$findUser` intentará encontrar un usuario que coincida con la consulta dada.

## Uso

```php
$findUser[usuarioResolver;volverYo mismo?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                         | Requerido |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------- |:---------:|
| usuario Resolver | cadena   | Consulta que se utiliza para encontrar al usuario.                                                 | verdadero |
| volverYo mismo?  | booleano | Devolverá el ID de usuario del usuario que ejecutó el comando cuando el usuario no fue encontrado. |   falso   |

## Ejemplo(s)

Esto buscará un usuario llamado Ferel, si no encuentra al usuario entonces devolverá el ID de usuario del autor del comando:

```javascript
bot.command({
    name: 'findUser',
    code: `
  $findUser[Ferel;true]
  `
});
```
