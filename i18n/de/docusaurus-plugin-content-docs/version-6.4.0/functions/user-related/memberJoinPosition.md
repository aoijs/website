---
title: '$memberJoinPosition'
description: '$memberJoinPosition wird eine Mitgliederposition zurückgeben.'
id: memberJoinPosition
---

`$memberJoinPosition` wird eine Mitgliederposition zurückgeben.

## Verwendung

```php
$memberJoinPosition[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung          | Erforderlich |
| -------- | ---------- | --------------------- |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde.     |    falsch    |

## Beispiel(e)

Dies wird deine Position zurückgeben, wenn du der Besitzer bist, dann wäre es `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
