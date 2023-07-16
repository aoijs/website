---
title: $channelName
description: '$channelName gibt den Kanalnamen des angegebenen Kanals zurück.'
id: channelName
---

`$channelName` gibt den Kanalnamen des angegebenen Kanals zurück.

## Verwendung

```php
$channelName[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                             | Erforderlich |
| ---------- | ---------- | -------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | Kanal-ID des Kanals, von dem der Name des Kanals stammt. |    falsch    |

## Beispiel(e)

Dies gibt den Kanalnamen des Kanals zurück, in dem der Befehl ausgeführt wurde:

```javascript
bot.command({
    Name: 'channelName',
    Code: `
  $channelName[$channelID]
  `
});
```