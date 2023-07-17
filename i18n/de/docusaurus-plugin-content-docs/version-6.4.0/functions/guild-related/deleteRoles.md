---
title: $deleteRoles
description: '$deleteRoles löscht eine oder mehrere Rollen.'
id: deleteRoles
---

`$deleteRoles` löscht eine oder mehrere Rollen.

## Verwendung

```php
$deleteRoles[guildID;...roles]
```

## Verwendung

| Feld      | Typ                      | Beschreibung                                | Erforderlich |
| --------- | ------------------------ | ------------------------------------------- |:------------:|
| guildID   | ganze Zahl               | Die Gilden-ID, wo sich die Rollen befinden. |     wahr     |
| ...Rollen | ganzzahlige Zeichenkette | Die Ids der Rollen.                         |     wahr     |

## Beispiel(e)

Dies wird Rollen deiner Gilden löschen ( Stelle sicher, dass du tatsächliche IDs hinzufügst):

```javascript
bot.command({
    Name: 'deleteRoles',
    Code: `
  Drei Rollen gelöscht!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```