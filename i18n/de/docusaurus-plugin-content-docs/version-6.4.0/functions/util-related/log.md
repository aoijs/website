---
title: '$log'
description: '$log protokolliert eine gegebene Nachricht in der Konsole Ihres Bots.'
id: log
---

`$log` protokolliert eine gegebene Nachricht in der Konsole Ihres Bots.

## Verwendung

```php
$log[content]
```

## Verwendung

| Feld   | Typ            | Beschreibung                               | Erforderlich |
| ------ | -------------- | ------------------------------------------ |:------------:|
| inhalt | string, Nummer | Inhalt der zu protokollierenden Nachricht. |     wahr     |

## Beispiel(e)

Dies protokolliert "Aoi.js ist großartig!" in der Bot-Konsole:

```javascript
bot.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```