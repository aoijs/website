---
title: '$textSplitMap'
description: '$textSplitMap erstellt eine Schleife über alle Werte, die innerhalb von $textSplit gespeichert werden'
id: textSplitMap
---

`$textSplitMap` erstellt eine Schleife über alle Werte, die innerhalb von $textSplit gespeichert werden.

## Verwendung

```php
$textSplit[awaited]
```

## Verwendung

| Feld     | Typ    | Beschreibung                 | Erforderlich |
| -------- | ------ | ---------------------------- |:------------:|
| erwartet | string | Name des erwarteten Befehls. |     wahr     |

## Beispiel(e)

Dies gibt die Argumente innerhalb von `$textSplit` zurück und sendet sie alle separat:

```javascript
bot.command({
    Name: "textSplitMap",
    Code: `
    $textSplitMap[devs]
    $textSplit[Ayaka,Leref,Ferel,Blurr;,]
    `
});

Bot. waitedCommand({
    Name: "devs",
    Code: `
    $message[1]
    `
});
```