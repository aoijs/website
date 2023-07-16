---
title: '$forEachGuild'
description: '$forEachGuild se ejecutará los comandos esperados en cada gremio.'
id: forEachGuild
---

`$forEachGuild` ejecutará determinados comandos esperados en cada gremio.

## Uso

```php
$forEachGuild[tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo              | Tipo   | Parámetros                                                     | Requerido |
| ------------------ | ------ | -------------------------------------------------------------- |:---------:|
| tiempo             | cadena | Cuánto tiempo tarda entre cada canal en ejecutar el siguiente. | verdadero |
| awaitData          | objeto | Datos esperados.                                               | verdadero |
| ...Cmds esperados  | cadena | Comando esperado para ejecutar.                                | verdadero |
| finalizar comando? | cadena | Comando esperado para ejecutar cuando termine el bucle.        | verdadero |

## Ejemplo(s)

Esto cambiará el valor de variable de cada gremio a "test":

```javascript
bot.command({
    name: "forEachGuild",
    code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```