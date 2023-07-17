---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode gibt den Zeitmodus eines Kanals in Sekunden zurück.'
id: getChannelSlowmode
---

`$getChannelSlowmode` gibt den Zeitmodus eines Kanals in Sekunden zurück.

## Verwendung

```php
$getChannelSlowmode[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                      | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID des Kanals, von dem der Sendermodus zurückgegeben werden soll. |    falsch    |

## Beispiel(e)

Dies gibt den langsameren Modus des Kanals zurück, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  Der aktuelle Channel slowmode ist: $getChannelSlowmode[$channelID] Sekunden!
  `
});
```