---
title: '$leaveThread'
description: '$leaveThread wird den Bot einen bestimmten Thread hinterlassen.'
id: leaveThread
---

`$killShard` wird den Bot einen bestimmten Thread hinterlassen.

## Verwendung

```php
$leaveThread[channelID;threadID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                        | Erforderlich |
| --------- | ---------- | --------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die ID des Kanals, in dem sich der Thread befindet. |     wahr     |
| threadID  | ganze Zahl | Die ID des Threads.                                 |     wahr     |

## Beispiel(e)

Dies wird einen Thread erstellen und den Bot nach der Erstellung verlassen lassen:

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```