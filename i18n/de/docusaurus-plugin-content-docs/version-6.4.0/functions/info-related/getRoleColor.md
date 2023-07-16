---
title: '$getRoleColor'
description: '$getRoleColor gibt die angegebene Rollenfarbe zurück.'
id: getRoleColor
---

`$getRoleColor` gibt die Farbe der angegebenen Rolle zurück.

## Verwendung

```php
$getRoleColor[roleId;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                   | Erforderlich |
| -------- | ---------- | -------------------------------------------------------------- |:------------:|
| roleId   | ganze Zahl | Die ID der Rolle, von der die Farbe zurückgegeben werden soll. |     wahr     |
| guildID? | ganze Zahl | Die ID der Gilde, in der die Rolle existiert.                  |    falsch    |

## Beispiel(e)

Dies gibt die Rollen-ID Ihrer höchsten Rolle zurück:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$highestRole]
  `
});
```