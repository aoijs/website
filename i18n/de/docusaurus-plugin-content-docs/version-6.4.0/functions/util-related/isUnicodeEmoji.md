---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji wird überprüfen, ob der angegebene Emoji ein Unicode-Emoji ist.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` wird überprüfen, ob der angegebene Emoji ein Unicode-Emoji ist.

## Verwendung

```php
$isUnicodeEmoji[emojiResolver]
```

## Verwendung

| Feld          | Typ    | Beschreibung   | Erforderlich |
| ------------- | ------ | -------------- |:------------:|
| emojiResolver | string | Unicode emoji. |     wahr     |

## Beispiel(e)

Dies liefert `true` als "🤓" ist ein gültiger Unicode-Emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
