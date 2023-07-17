---
title: $giveRole
description: '$giveRole wird einem bestimmten Benutzer eine bestimmte Rolle geben.'
id: giveRole
---

`$giveRole` wird einem bestimmten Benutzer eine bestimmte Rolle geben.

## Verwendung

```php
$giveRole[guildID;userID;roleID;reason?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                      | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Von welcher Gilde das Mitglied Rollen erhalten soll.              |     wahr     |
| userID  | ganze Zahl | Die Benutzer-ID des Gildenmitglieds.                              |     wahr     |
| roleID  | ganze Zahl | Die ID der zu gebenden Rolle.                                     |     wahr     |
| warum?  | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

Bitte beachten Sie, dass die Bots **höchste** Rolle über der Rolle liegen muss, die Sie zuweisen möchten.

## Beispiel(e)

Hiermit wird Ihnen eine Rolle mit dem Namen "Admin" (falls vorhanden):

```javascript
bot.command({
    Name: 'giveRole',
    Code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];Irgendein Grund.]
  `
});
```