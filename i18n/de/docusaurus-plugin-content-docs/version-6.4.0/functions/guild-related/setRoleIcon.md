---
title: '$setRoleIcon'
description: '$setRoleIcon wird das Symbol einer bestimmten Rolle setzen.'
id: setRoleIcon
---

`$setRoleIcon` wird das Symbol einer bestimmten Rolle setzen.

## Verwendung

```php
$setRoleIcon[guildID;roleID;icon]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                  | Erforderlich |
| ------- | ---------- | --------------------------------------------- | ------------ |
| guildID | ganze Zahl | Die ID der Gilde, in der die Rolle existiert. | falsch       |
| roleID  | ganze Zahl | Die Rollen-ID.                                | falsch       |
| symbol  | string     | Die URL des Symbols.                          | falsch       |

## Beispiel(e)

Dadurch wird das Symbol einer bestimmten Rolle auf das angegebene Symbol geändert:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```