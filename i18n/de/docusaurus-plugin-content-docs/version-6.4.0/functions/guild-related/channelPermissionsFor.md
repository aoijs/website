---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor gibt die Kanalrechte eines bestimmten Benutzers oder einer bestimmten Rolle zurück.'
id: channelPermissionsFor
---

`$channelPermissionsFor` gibt die Kanalrechte eines bestimmten Benutzers oder einer bestimmten Rolle zurück.

## Verwendung

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                               | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------------------------------------------ |:------------:|
| userOrRoleID | ganze Zahl | Der Benutzer oder die Rollen-ID, deren Berechtigungen zurückgegeben werden sollen.         |     wahr     |
| channelID    | ganze Zahl | Die Kanal-ID des Kanals, von dem die Berechtigungen zurückgegeben werden sollen.           |     wahr     |
| sep?         | string     | Der Trennzeichen, der verwendet wird, um die Berechtigungen zu trennen, standardmäßig ",". |    falsch    |

## Beispiel(e)

Dies gibt deine Berechtigungen in dem Kanal zurück, in dem du den Befehl ausführst:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
