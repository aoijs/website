---
title: '$forEachUser'
description: '$forEachUser ejecutará comandos esperados en cada canal de cada gremio.'
id: forEachUser
---

`$forEachUser` ejecutará los comandos esperados para el usuario en todos los gremios.

## Uso

```php
$forEachUser[tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo             | Tipo   | Parámetros                                                     | Requerido |
| ----------------- | ------ | -------------------------------------------------------------- |:---------:|
| tiempo            | cadena | Cuánto tiempo tarda entre cada canal en ejecutar el siguiente. | verdadero |
| awaitData         | objeto | Datos esperados.                                               | verdadero |
| ...Cmds esperados | cadena | Comando esperado para ejecutar.                                | verdadero |
| finalizar comando | cadena | Comando esperado para ejecutar cuando termine el bucle.        | verdadera |

## Ejemplo(s)

Esto registrará cada usuario (caché) en tu consola:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachUser[1;{};returnUsers;]
  `
});

bot.awaitedCommand({
  name: "returnUsers",
  code: `
  $log[ $authorID ]
  `
});
```
