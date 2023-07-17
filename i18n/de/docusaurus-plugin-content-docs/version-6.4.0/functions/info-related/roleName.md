---
title: $roleName
description: '$roleName gibt den Namen einer bestimmten Rolle zurück.'
id: roleName
---

`$roleName` gibt den Namen einer bestimmten Rolle zurück.

## Verwendung

```php
$roleName[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                     | Erforderlich |
| -------- | ---------- | ---------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID, von der der Rollenname zurückgegeben werden soll. |     wahr     |
| guildID? | ganze Zahl | Die Gilden-ID.                                                   |    falsch    |

## Beispiel(e)

Dies wird den Rollennamen jeder beliebigen Rolle zurückgeben, in diesem Fall würde es `@everyone` zurückgeben:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
