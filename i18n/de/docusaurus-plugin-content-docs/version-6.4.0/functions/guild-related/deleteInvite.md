---
title: $deleteInvite
description: '$deleteInvite wird eine bestimmte Gildeneinladung löschen.'
id: deleteInvite
---

`$deleteInvite` wird eine bestimmte Gildeneinladung löschen.

## Verwendung

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                       | Erforderlich |
| ---------- | ---------- | ------------------------------------------------------------------ |:------------:|
| guildID    | ganze Zahl | Die Gilden-ID, deren Einladung gelöscht werden soll.               |     wahr     |
| inviteCode | string     | Der spezifische Einladungscode.                                    |     wahr     |
| warum?     | string     | Begründung, die in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies löscht eine Einladung (funktioniert nicht, da der Einladungscode nicht existiert):

```javascript
bot.command({
    Name: 'deleteInvite',
    Code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```