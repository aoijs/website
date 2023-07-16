---
title: '$removeThreadMember'
description: '$removeThreadMember wird ein bestimmtes Thread-Mitglied aus einem bestimmten Thread entfernen.'
id: removeThreadMember
---

`$removeThreadMember` wird ein bestimmtes Thread-Mitglied aus einem gegebenen Thread entfernen.

## Verwendung

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                        | Erforderlich |
| --------- | ---------- | ------------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die ID des Kanals, in dem sich der Thread befindet.                 |     wahr     |
| threadID  | ganze Zahl | Die Thread-ID.                                                      |     wahr     |
| userID    | ganze Zahl | Die ID des Benutzers, der aus dem angegebenen Thread entfernt wird. |     wahr     |
| warum?    | string     | Begründung, die im Audit-Log der Gilde angezeigt wird.              |    falsch    |

## Beispiel(e)

Hiermit wird der Befehlsautor aus einem gegebenen Thread entfernt:

```javascript
bot.command({
    Name: 'removeThreadMember',
    Code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```