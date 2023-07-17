---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL wird die URL des Bildes des Rollensymbols abrufen.'
id: guildRoleIconURL
---

`$guildRoleIconURL` wird die Bild-URL des Rollensymbol abrufen.

## Verwendung

```php
$guildRoleIconURL[guildId?;roleId]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------- |:------------:|
| guildId? | ganze Zahl | ID der Gilde, in der die Rolle existiert.                   |    falsch    |
| roleId   | ganze Zahl | ID der Rolle, die Sie überprüfen möchten, ob sie existiert. |     wahr     |

## Beispiel(e)

Dies gibt die Bild-URL des Rollensymbol zurück:

```javascript
bot.command({
    Name: 'guildRoleIconURL',
    Code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```