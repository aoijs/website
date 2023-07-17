---
title: '$setGuildName'
description: '$setGuildName wird den Namen einer Gilde ändern.'
id: setGuildName
---

`$setGuildName` wird den Namen einer Gilde ändern.

## Verwendung

```php
$setGuildName[name;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                | Erforderlich |
| -------- | ---------- | ------------------------------------------- |:------------:|
| Name     | string     | Der neue Gildenname.                        |     wahr     |
| guildID? | ganze Zahl | Die ID der Gilde, deren Name geändert wird. |    falsch    |

## Beispiel(e)

Dies ändert den Namen der Gilde, in der du den Befehl ausführst:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```