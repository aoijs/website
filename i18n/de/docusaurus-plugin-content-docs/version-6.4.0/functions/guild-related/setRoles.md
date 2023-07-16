---
title: $setRoles
description: '$setRoles wird die Rollen eines Mitglieds festlegen.'
id: setRoles
---

`$setRoles` wird die Rollen eines Mitglieds festlegen.

## Verwendung

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                        | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------------------------- |:------------:|
| guildID    | ganze Zahl | Die ID der Gilde, in der die Rollen des Benutzers entfernt oder hinzugefügt werden. |     wahr     |
| memberID   | ganze Zahl | Die Benutzer-ID des Gildenmitglieds.                                                |     wahr     |
| warum?     | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird.                   |    falsch    |
| ...roleIDs | ganze Zahl | Die Ids der Rollen.                                                                 |     wahr     |

## Beispiel(e)

Dies wird entweder bestimmte Rollen von Ihnen entfernen oder hinzufügen:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```