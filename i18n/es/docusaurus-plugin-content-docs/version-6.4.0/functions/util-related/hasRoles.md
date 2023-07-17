---
title: '$hasRoles'
description: '$hasRoles comprobará si el usuario proporcionado tiene alguno de los roles listados en el argumento de los roles.'
id: hasRoles
---

`$hasRoles` comprobará si el usuario proporcionado tiene alguno de los roles listados en el argumento de los roles.

## Uso

```php
$hasRoles[servidoriD;usuarioID;...roles]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                            | Requerido |
| ---------- | ------ | ----------------------------------------------------- |:---------:|
| servidorID | entero | ID del servidor desde el que se contarán los canales. | verdadero |
| usarioID   | entero | ID del usuario que tiene los roles.                   | verdadero |
| ...roles   | entero | Los roles que se comprobarán.                         | verdadero |

## Ejemplo(s)

Esto devolverá `true` cuando el usuario tenga cualquiera de los roles listados:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
