---
title: '$modifyRole'
description: '$modifyRole wird eine bestimmte Rolle ändern.'
id: modifyRole
---

`$modifyRole` wird eine bestimmte Rolle ändern.

## Verwendung

```php
$modifyRole[guildID;roleID;...data]
```

## Verwendung

| Feld     | Typ            | Beschreibung                               | Erforderlich |
| -------- | -------------- | ------------------------------------------ |:------------:|
| guildID  | ganze Zahl     | Die Gilden-ID, wo sich die Rolle befindet. |     wahr     |
| roleID   | ganze Zahl     | Die zu ändernde Rollen-ID.                 |     wahr     |
| ...Daten | string, Objekt | Neue Rollendaten.                          |     wahr     |

## Beispiel(e)

Dies wird eine existierende Rolle bearbeiten / den Namen in "Awesome!" ändern:

```javascript
bot.command({
    Name: 'modifyRole',
    Code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```