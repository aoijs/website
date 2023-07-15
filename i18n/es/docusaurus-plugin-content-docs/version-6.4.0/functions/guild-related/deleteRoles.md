---
title: '$deleteRoles'
description: '$deleteRoles eliminará uno o varios roles.'
id: deleteRoles
---

$deleteRoles eliminará uno o varios roles.

## Uso

```php
$deleteRoles[servidorID;...roles]
```

## Parámetros

| Campo      | Tipo           | Parámetros                                               | Requerido |
| ---------- | -------------- | -------------------------------------------------------- |:---------:|
| servidorID | entero         | El ID de la hermandad de donde están ubicados los roles. | verdadero |
| ...roles   | entero, cadena | Los Ids de los roles.                                    | verdadero |

## Ejemplo(s)

Esto eliminará los roles de tus gremios (asegúrate de agregar identificadores reales):

```javascript
bot.command({
    name: 'deleteRoles',
    code: `
  Eliminó tres roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```