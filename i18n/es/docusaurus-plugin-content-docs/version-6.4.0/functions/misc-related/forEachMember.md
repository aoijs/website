---
title: '$forEachMember'
description: '$forEachMember ejecutará comandos esperados en cada canal de cada gremio.'
id: forEachMember
---

`$forEachMember` ejecutará comandos esperados en cada canal de cada gremio.

## Uso

```php
$forEachMember[tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo             | Tipo     | Parámetros                                                       | Requerido |
| ----------------- | -------- | ---------------------------------------------------------------- |:---------:|
| tiempo            | consulta | Cuánto tiempo tarda entre cada miembro en ejecutar el siguiente. | verdadero |
| awaitData         | objeto   | Datos esperados.                                                 | verdadero |
| ...Cmds esperados | cadena   | Comando esperado para ejecutar.                                  | verdadero |
| finalizar comando | string   | Comando esperado para ejecutar cuando termine el bucle.          | verdadero |

## Ejemplo(s)


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