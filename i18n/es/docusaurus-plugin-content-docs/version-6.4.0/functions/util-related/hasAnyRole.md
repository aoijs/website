---
title: '$hasAnyRole'
description: '$hasAnyRole comprobará si el usuario proporcionado tiene alguno de los roles listados en el argumento de los roles.'
id: hasAnyRole
---

`$hasAnyRole` comprobará si el usuario proporcionado tiene alguno de los roles listados en el argumento de los roles.

## Uso

```php
$hasAnyRole[servidoriD;usuarioID;...roles]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                            | Requerido |
| ---------- | ------ | ----------------------------------------------------- |:---------:|
| servidorID | entero | ID del servidor desde el que se contarán los canales. | verdadero |
| usarioID   | entero | El ID del usuario.                                    | verdadero |
| ...roles   | entero | Los roles que se comprobarán.                         | verdadero |

## Ejemplo(s)

Esto devolverá `true` cuando el usuario tenga cualquiera de los roles listados:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
