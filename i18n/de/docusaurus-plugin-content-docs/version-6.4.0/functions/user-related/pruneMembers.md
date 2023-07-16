---
title: '$pruneMembers'
description: '$pruneMembers wird alle inaktiven Benutzer löschen, deren Zeit für eine bestimmte Zeit inaktiv war.'
id: pruneMembers
---

`$pruneMembers` wird alle inaktiven Benutzer löschen, deren Zeit für eine bestimmte Zeit inaktiv war.

## Verwendung

```php
$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]
```

## Verwendung

| Feld          | Typ                      | Beschreibung                                                                                                      | Erforderlich |
| ------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- |:------------:|
| tage          | anzahl                   | Anzahl der Tage für die prune zählen (1-30, 7 Standard).                                                          |     wahr     |
| guildID?      | ganze Zahl               | Wo die Mitglieder beschnitten werden.                                                                             |    falsch    |
| rollen-IDs?   | ganzzahlige Zeichenkette | Rollen einzufügen, aufgeteilt durch Kommas.                                                                       |    falsch    |
| trocken?      | boolean                  | 1. **true** <br /> 2. **false** (Standard)                                                                  |    falsch    |
| warum?        | string                   | Grund für die Anzeige im Audit-Log der Gilde.                                                                     |    falsch    |
| zurückzählen? | boolean                  | Rücksendungsanzahl von abgeschnittenen Mitgliedern. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies wird alle Mitglieder beschneiden, die seit 4 Tagen inaktiv sind und die Anzahl der Mitglieder zurückgeben, die diese Anforderungen erfüllen:

```javascript
bot.command({
    name: 'pruneMembers',
    code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```