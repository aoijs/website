---
title: '$textSplitMap'
description: '$textSplitMap creará un bucle sobre todos los valores que se almacenan dentro de $textSplit'
id: textSplitMap
---

`$textSplitMap` creará un bucle sobre todos los valores que se almacenan dentro de $textSplit.

## Uso

```php
$textSplit[awaited]
```

## Parámetros

| Campo    | Tipo   | Parámetros                   | Requerido |
| -------- | ------ | ---------------------------- |:---------:|
| esperado | string | Nombre del comando esperado. | verdadera |

## Ejemplo(s)

Esto devolverá los argumentos dentro de `$textSplit` y los enviará todos por separado:

```javascript
bot.command({
    name: "textSplitMap",
    code: `
    $textSplitMap[devs]
    $textSplit[Ayaka,Leref,Ferel,Blurr;,]
    `
});

bot.awaitedCommand({
    name: "devs",
    code: `
    $message[1]
    `
});
```