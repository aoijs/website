---
title: '$customEmoji'
description: '$customEmoji wird ein benutzerdefiniertes Emoji zurückgeben.'
id: customEmoji
---

`$customEmoji` wird ein benutzerdefiniertes Emoji zurückgeben.

## Verwendung

```php
$customEmoji[emojiResolver;guildID?]
```

## Verwendung

| Feld          | Typ              | Beschreibung                                                                                             | Erforderlich |
| ------------- | ---------------- | -------------------------------------------------------------------------------------------------------- |:------------:|
| emojiResolver | string           | Emoji name or ID.                                                                                        |     wahr     |
| guildID?      | string, Ganzzahl | Woher die Emoji kommt. <br /> 1. **global** <br /> 2. **guildID** - Ersetzen durch Gilden-ID |    falsch    |

## Beispiel(e)

Dies sendet ein benutzerdefiniertes Emoji deiner Wahl, ersetze EmojiResolver durch einen tatsächlichen Emoji-Namen oder ID:

Versucht nach den Emoji in allen Gilden, die der Bot ist:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;global]
  `
});
```

Versucht, die Emoji der gegebenen Gilde zurückzugeben:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;specific guild ID]
  `
});
```