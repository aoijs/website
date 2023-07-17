---
title: $emojiCount
description: '$emojiCount wird die Emoji-Anzahl einer Gilde zurückgeben.'
id: emojiCount
---

`$emojiCount` wird die Emoji-Anzahl einer Gilde zurückgeben.

## Verwendung

```php
$emojiCount[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                        | Erforderlich |
| -------- | ---------- | --------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Von wo die Emojis gezählt und zurückgegeben werden. |    falsch    |

## Beispiel(e)

Dies gibt die Emoji-Anzahl deiner Gilde zurück:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  Du hast $emojiCount Emojis in deiner Gilde!
  `
});
```