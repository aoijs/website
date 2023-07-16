---
title: $ownerID
description: '$ownerID wird die ID des Serverbesitzers zurückgeben, abhängig vom angegebenen Argument.'
id: ownerID
---

`$ownerID` +wird die ID des Serverbesitzers zurückgeben, abhängig vom angegebenen Argument.

## Verwendung

```php
$ownerID[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies gibt die ID des Serverbesitzers zurück, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```
