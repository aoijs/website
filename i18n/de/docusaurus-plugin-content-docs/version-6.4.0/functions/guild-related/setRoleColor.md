---
title: $setRoleColor
description: '$setRoleColor wird eine Rollenfarbe festlegen.'
id: setRoleColor
---

`$setRoleColor` wird eine Rollenfarbe festlegen.

## Verwendung

```php
$setRoleColor[roleID;color]
```

## Verwendung

| Feld   | Typ        | Beschreibung                         | Erforderlich |
| ------ | ---------- | ------------------------------------ |:------------:|
| roleID | ganze Zahl | Die ID der Rolle, die geändert wird. |     wahr     |
| farben | string     | Die neue (hex) Farbe.                |     wahr     |

## Beispiel(e)

Dies ändert die Farbe einer zufälligen Rolle in rot:

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```