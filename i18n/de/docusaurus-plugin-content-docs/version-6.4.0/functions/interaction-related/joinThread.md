---
title: '$joinThread'
description: '$joinThread wird den Bot zu einem bestimmten Thread verbinden.'
id: joinThread
---

`$joinThread` wird den Bot zu einem bestimmten Thread verbinden.

## Verwendung

```php
$joinThread[channelID;threadID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                   | Erforderlich |
| --------- | ---------- | ---------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die Kanal-ID, in der sich der Thread befindet. |     wahr     |
| threadID  | ganze Zahl | Die ID des Threads.                            |     wahr     |

## Beispiel(e)

Dies wird einen Thread im aktuellen Kanal erstellen und den Bot hinzufügen:

```javascript
bot.command({
    name: 'joinThread',
    code: `
  $joinThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```