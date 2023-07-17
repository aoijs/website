---
title: $deleteSticker
description: '$deleteSticker wird einen bestimmten Aufkleber löschen.'
id: deleteSticker
---

`$deleteSticker` wird einen bestimmten Aufkleber löschen.

## Verwendung

```php
$deleteSticker[guildID;sticker]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                   | Erforderlich |
| --------- | ---------- | ---------------------------------------------- |:------------:|
| guildID   | ganze Zahl | Die Gilden-ID, wo sich der Aufkleber befindet. |     wahr     |
| aufkleber | string     | Der Name des Aufklebers.                       |     wahr     |

## Beispiel(e)

Dadurch wird ein Aufkleber deiner Gilde gelöscht ( Stelle sicher, dass du einen aktuellen Aufklebernamen angibst):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```