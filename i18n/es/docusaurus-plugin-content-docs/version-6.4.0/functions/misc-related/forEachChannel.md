---
title: '$forEachChannel'
description: '$forEachChannel ejecutará comandos esperados en cada canal de cada gremio.'
id: forEachChannel
---

`$forEachChannel` ejecutará comandos esperados en cada canal de cada gremio.

## Uso

```php
$forEachChannel[tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo             | Tipo   | Parámetros                                                     | Requerido |
| ----------------- | ------ | -------------------------------------------------------------- |:---------:|
| tiempo            | cadena | Cuánto tiempo tarda entre cada canal en ejecutar el siguiente. | verdadero |
| awaitData         | objeto | Datos esperados.                                               | verdadero |
| ...Cmds esperados | cadena | Comando esperado para ejecutar.                                | verdadero |
| finalizar comando | cadena | Comando esperado para ejecutar cuando termine el bucle.        | verdadero |

## Ejemplo(s)

Esto cambiará el valor de variable de cada canal a "test":

```javascript
bot.command({
    name: "forEachChannel",
    code: `
  $forEachChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```