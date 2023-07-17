---
title: $giveRoles
description: '$giveRoles wird einem bestimmten Benutzer mehrere oder eine bestimmte Rolle(n) geben.'
id: giveRoles
---

`$giveRoles` wird einem bestimmten Benutzer mehrere oder eine bestimmte Rolle(n) geben.

## Verwendung

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                      | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Von welcher Gilde das Mitglied Rollen erhalten soll.              |     wahr     |
| userID  | ganze Zahl | Die Benutzer-ID des Gildenmitglieds.                              |     wahr     |
| warum?  | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |
| rollen  | ganze Zahl | Die IDs der zu gebenden Rollen.                                   |     wahr     |

Bitte beachten Sie, dass die Bots **höchste** Rolle über der Rolle liegen muss, die Sie zuweisen möchten.

## Beispiel(e)

Dies wird dir zwei Rollen zuweisen, die "Admin" und "Moderator" heißen (falls vorhanden):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```