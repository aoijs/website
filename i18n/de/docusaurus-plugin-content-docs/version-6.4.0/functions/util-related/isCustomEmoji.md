---
title: '$isCustomEmoji'
description: '$isCustomEmoji wird überprüfen, ob der angegebene Emoji ein benutzerdefinierter Emoji ist oder nicht.'
id: isCustomEmoji
---

`$isCustomEmoji` wird überprüfen, ob der angegebene Emoji ein benutzerdefinierter Emoji ist oder nicht.

## Verwendung

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                           | Erforderlich |
| ------------- | ---------- | ---------------------------------------------------------------------- |:------------:|
| emojiResolver | string     | Emoji möchten Sie überprüfen, ob es ein benutzerdefiniertes Emoji ist. |     wahr     |
| guildID?      | ganze Zahl | ID der Gilde, in der die Emoji erschaffen wurden.                      |    falsch    |

## Beispiel(e)

Dies gibt `true` als der ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) Emoji ist in der Tat ein benutzerdefinierte Emoji:

```javascript
bot.command({
    Name: 'isCustomEmoji',
    Code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
