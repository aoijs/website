---
title: '$rolePerms'
description: '$rolePerms wird alle angegebenen Berechtigungen einer Rolle zurückgeben.'
id: rolePerms
---

`$rolePerms` gibt alle angegebenen Berechtigungen einer Rolle zurück.

## Verwendung

```php
$rolePerms[roleID;sep?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                          | Erforderlich |
| -------- | ---------- | ----------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID.                                        |     wahr     |
| sep?     | ganze Zahl | Separator um mehrere zurückgegebene Werte zu trennen. |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID.                                        |    falsch    |

## Beispiel(e)

Dies gibt die Berechtigungen für die `@everyone` Rolle zurück:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
