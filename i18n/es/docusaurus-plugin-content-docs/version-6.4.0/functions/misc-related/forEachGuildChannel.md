---
title: '$forEachGuildChannel'
description: '$forEachGuildChannel ejecutará comandos esperados en cada canal de cada gremio.'
id: forEachGuildChannel
---

`$forEachGuildChannel` ejecutará comandos esperados en cada canal de cada gremio.

## Uso

```php
$forEachGuildChannel[tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo             | Tipo     | Parámetros                                                     | Requerido |
| ----------------- | -------- | -------------------------------------------------------------- |:---------:|
| tiempo            | consulta | Cuánto tiempo tarda entre cada canal en ejecutar el siguiente. | verdadero |
| esperar datos     | objeto   | Datos esperados.                                               | verdadero |
| ...Cmds esperados | cadena   | Comando esperado para ejecutar.                                | verdadero |
| finalizar comando | string   | Comando esperado para ejecutar cuando termine el bucle.        | verdadero |

## Ejemplo(s)

Esto cambiará el valor de variable de cada canal a "test":

```javascript
bot.command({
    name: "forEachGuildChannel",
    code: `
  $forEachGuildChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```