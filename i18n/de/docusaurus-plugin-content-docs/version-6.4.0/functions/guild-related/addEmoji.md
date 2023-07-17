---
title: $addEmoji
description: '$addEmoji wird ein Emoji zur angegebenen Gilde hinzufügen. Wenn Rollen-IDs angegeben werden, können Emoji nur von Benutzern mit einer der angegebenen Rollen-IDs verwendet werden.'
id: addEmoji
---

`$addEmoji` wird ein Emoji zur angegebenen Gilde hinzufügen. Wenn Rollen-IDs angegeben werden, werden Emoji nur von Benutzern mit einem der angegebenen Rollen-IDs verwendet.

## Verwendung

```php
$addEmoji[guildID;URL;name;returnEmoji?;reason?;...roles?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                          | Erforderlich |
| ------------- | ---------- | ----------------------------------------------------- |:------------:|
| guildID       | ganze Zahl | Gilden-ID                                             |     wahr     |
| URL           | string     | gültige Bild-URL                                      |     wahr     |
| name          | string     | emoji name                                            |     wahr     |
| retournEmoji? | string     | den erstellten Emoji zurückgeben?                     |    falsch    |
| warum?        | string     | Grund, der in den Audit-Logs der Gilde angezeigt wird |    falsch    |
| rollen?       | ganze Zahl | welche Rollen die angegebenen Emoji verwenden können  |    falsch    |

## Beispiel(e)

Dies wird einen Emoji erstellen:

```javascript
bot.command({
    name: 'addEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
