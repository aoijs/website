---
title: '$channelID'
description: '$channelID gibt die Kanal-ID des angegebenen Kanalnamens zurück.'
id: channelID
---

`$channelID` gibt die Kanal-ID des angegebenen Kanalnamens zurück.

## Verwendung

```php
$channelID[name?]
```

## Verwendung

| Feld  | Typ        | Beschreibung                                                     | Erforderlich |
| ----- | ---------- | ---------------------------------------------------------------- |:------------:|
| name? | ganze Zahl | Kanalname des Kanals für den die Kanal-ID angegeben werden soll. |    falsch    |

## Beispiel(e)

Dies gibt die Kanal-ID des Kanals zurück, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```