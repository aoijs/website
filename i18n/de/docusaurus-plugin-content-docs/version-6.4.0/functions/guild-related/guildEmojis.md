---
title: '$guildEmojis'
description: '$guildEmojis wird die Emojis einer bestimmten Gilde zurückgeben.'
id: guildEmojis
---

`$guildEmojis` wird die Emojis einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildEmojis[sep?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------- |:------------:|
| sep?     | string     | Der Trennzeichen, um die zurückgegebenen Emojis zu trennen. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde.                                           |    falsch    |

## Beispiel(e)

Dies wird die Emojis deiner Gilde zurückgeben:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
