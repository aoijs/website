---
title: '$awaitData'
description: '$awaitData devolverá los datos esperados dados en los comandos esperados.'
id: awaitData
---

`$awaitData` devolverá los datos esperados dados en los comandos esperados.

## Uso

```php
$awaitData[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción               | Requerido |
| ------ | ------ | ------------------------- |:---------:|
| nombre | cadena | Nombre de datos esperado. | verdadero |

## Ejemplo(s)

Esto devolverá la ID de cada miembro del servidor y lo registrará en su consola:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , es uno de los miembros de $awaitData[members]]
  `
});
```
