---
title: '$getBanReason'
description: '$getBanReason gibt einen Sperrgrund eines bestimmten Benutzers zurück.'
id: getBanReason
---

`$getBanReason` gibt einen Sperrgrund eines bestimmten Benutzers zurück.

## Verwendung

```php
$getBanReason[guildID?;userID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                          | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID.                                                                        |    falsch    |
| userID?  | ganze Zahl | Die Benutzer-ID des Benutzers, von dem Sie den Grund der Sperrung überprüfen möchten. |    falsch    |

## Beispiel(e)

Dies gibt den Bann-Grund für wen auch immer du möchtest:

```javascript
bot.command({
    Name: 'getBanReason',
    Code: `
  $getBanReason[$guildID;userID] 
  ` // Stellen Sie sicher, dass "userID" durch eine aktuelle Benutzer-ID
});
```