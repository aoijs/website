---
title: $memberJoinedDate
description: '$memberJoinDate wird das Mitgliedschaftsdatum in MS zurückgeben.'
id: memberJoinedDate
---

`$memberJoinDate` wird das Mitgliedschaftsdatum in MS zurückgeben.

## Verwendung

```php
$memberJoinDate[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung          | Erforderlich |
| -------- | ---------- | --------------------- |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde.     |    falsch    |

## Beispiel(e)

Dies gibt dein Beitrittsdatum in MS zurück und analysiert Datum:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
