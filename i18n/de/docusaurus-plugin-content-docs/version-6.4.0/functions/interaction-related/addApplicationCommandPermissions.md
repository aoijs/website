---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions wird die Berechtigungen eines Schrägstrich Befehls ändern.'
id: addApplicationCommandPermissions
---

## Verwendung

```php
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## Verwendung

| Feld           | Typ              | Beschreibung                                                                                | Erforderlich |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------- |:------------:|
| guildID/global | string, Ganzzahl | Typ des Anwendungs-Befehls. <br/> 1. **global** <br/> 2. **bestimmte GildenID** |     wahr     |
| id             | ganze Zahl       | Anwendungskommando-ID.                                                                      |     wahr     |
| ...Perms       | string           | Berechtigungen.                                                                             |     wahr     |

## Beispiel(e)

Dies wird den Schrägstrich Befehl für alle in der Gilde deaktivieren ( Stelle sicher, dass du "ID" durch den aktuellen Schrägstrich ID ersetzt):

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
