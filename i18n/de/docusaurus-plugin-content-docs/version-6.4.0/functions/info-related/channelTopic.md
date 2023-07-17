---
title: $channelTopic
description: '$channelTopic gibt das Thema des angegebenen Kanals zurück.'
id: channelTopic
---

`$channelTopic` gibt das Thema des angegebenen Kanals zurück.

## Verwendung

```php
$channelTopic[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                           | Erforderlich |
| ---------- | ---------- | ---------------------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID des Kanals, von dem das Thema des Kanals zurückgegeben werden soll. |    falsch    |

## Beispiel(e)

Dies gibt das Kanalthema des Kanals zurück, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```