---
title: '$resolveEmojiID'
description: '$resolveEmojiID will resolve a certain emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` will resolve a certain emoji.

## Modo de uso

```php
$resolveEmojiID[emojiResolver]
```

## Parámetros

| Campo         | Tipo   | Parámetros            | Requerido |
| ------------- | ------ | --------------------- |:---------:|
| emojiResolver | string | Emoji name or string. | verdadera |

## Ejemplo(s)

This will return `<:LerefMoney:1003365344724910191>`:

```javascript
bot.command({
    name: 'resolveEmojiID',
    code: `
  $resolveEmojiID[LerefMoney]
  `
});
```