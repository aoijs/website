---
title: '$resolveEmojiID'
description: '$resolveEmojiID löst ein bestimmtes Emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` wird ein bestimmtes Emoji auflösen.

## Verwendung

```php
$resolveEmojiID[emojiResolver]
```

## Verwendung

| Feld          | Typ    | Beschreibung            | Erforderlich |
| ------------- | ------ | ----------------------- |:------------:|
| emojiResolver | string | Emoji-Name oder String. |     wahr     |

## Beispiel(e)

Dies wird `<:LerefMoney:1003365344724910191>` zurückgeben:

```javascript
bot.command({
    Name: 'resolveEmojiID',
    Code: `
  $resolveEmojiID[LerefMoney]
  `
});
```