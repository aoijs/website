---
title: $kick
description: '$kick wird einen Benutzer aus einer bestimmten Gilde entfernen.'
id: kick
---

`$kick` wird einen Benutzer aus einer bestimmten Gilde entfernen.

## Verwendung

```php
$kick[guildID;userID;reason?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                      | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Die ID der Gilde, von der der Benutzer entfernt werden soll.      |     wahr     |
| userID  | ganze Zahl | Die ID des Benutzers, der aus der Gilde entfernt wird.            |     wahr     |
| warum?  | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies wird jemanden aus deiner Gilde kicken:

```javascript
bot.command({
    -Name: 'kick',
    code: `
  <@$findMember[$message;false]> wurde gekickt!
  $kick[$guildID;$findMember[$message;false];Beispiel Grund!]
  `
});
```
