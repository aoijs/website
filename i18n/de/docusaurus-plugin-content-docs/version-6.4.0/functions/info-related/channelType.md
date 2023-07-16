---
title: $channelType
description: '$channelType gibt den Typ des angegebenen Kanals zurück.'
id: channelType
---

`$channelType` gibt den Typ des angegebenen Kanals zurück.

## Verwendung

```php
$channelType[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                          | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID des Kanals soll der Kanaltyp zurückgegeben werden. |    falsch    |

## Beispiel(e)

Dies gibt den Kanaltyp des Kanals zurück, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```