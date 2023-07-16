---
title: '$moveUser'
description: '$moveUser verschiebt einen bestimmten Benutzer zwischen zwei Sprachkanälen.'
id: moveUser
---

`$moveUser` verschiebt einen bestimmten Benutzer zwischen zwei Sprachkanälen.

## Verwendung

```php
$moveUser[guildID;userID;channelID;reason?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                           | Erforderlich |
| --------- | ---------- | ------------------------------------------------------ |:------------:|
| guildID   | ganze Zahl | Die Gilden-ID, wo sich der Sprachkanal befindet.       |     wahr     |
| userID    | ganze Zahl | Die Benutzer-ID des zu verschiebenden Benutzers.       |     wahr     |
| channelID | ganze Zahl | Die Voice-Kanal-ID, wo der Benutzer verschoben wird.   |     wahr     |
| warum?    | string     | Begründung, die im Audit-Log der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies verschiebt einen Benutzer auf einen anderen Sprachkanal:

```javascript
bot.command({
    Name: 'moveUser',
    Code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```