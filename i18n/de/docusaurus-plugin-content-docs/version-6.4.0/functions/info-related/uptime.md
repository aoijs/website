---
title: '$uptime'
description: '$uptime wird die Laufzeit des Bots zurückgeben.'
id: uptime
---

`$uptime` gibt die Laufzeit des Bots zurück.

## Verwendung

```php
$uptime[option?]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                          | Erforderlich |
| ------- | ------ | ----------------------------------------------------- |:------------:|
| option? | string | Wie die Uptime zurückgegeben wird (unten aufgeführt). |    falsch    |

| Option                     | Ausgang                 |
| -------------------------- | ----------------------- |
| vollständig **(Standard)** | 19 Minuten, 21 Sekunden |
| humanisieren               | 19 m 21 s               |
| M                          | 1165980                 |

## Beispiel(e)

Dies gibt die Zeit zurück, für die dein Bot online ist:

```javascript
bot.command({
    name: 'uptime',
    code: `
  Ich bin für $uptime[full] dabei!
  `
});
```
