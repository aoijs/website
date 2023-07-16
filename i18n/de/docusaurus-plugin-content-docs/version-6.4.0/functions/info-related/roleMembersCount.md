---
title: $roleMembersCount
description: '$roleMembersCount wird die Anzahl der Mitglieder, die eine bestimmte Rolle haben, zurückgeben.'
id: roleMembersCount
---

`$roleMembersCount` wird die Anzahl der Mitglieder, die eine bestimmte Rolle haben, zurückgeben.

## Verwendung

```php
$roleMembersCount[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID. |     wahr     |
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies gibt die Anzahl der Benutzer zurück, die eine bestimmte Rolle haben:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```