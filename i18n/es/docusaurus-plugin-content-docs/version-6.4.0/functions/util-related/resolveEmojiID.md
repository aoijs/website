---
title: '$resolveEmojiID'
description: '$resolveEmojiID resolverá un cierto emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` resolverá un cierto emoji.

## Uso

```php
$resolveEmojiID[emojiResolver]
```

## Parámetros

| Campo                | Tipo   | Parámetros                | Requerido |
| -------------------- | ------ | ------------------------- |:---------:|
| resolutor de emojios | string | Nombre o cadena de Emoji. | verdadera |

## Ejemplo(s)

Esto devolverá `<:LerefMoney:1003365344724910191>`:

```javascript
bot.command({
    name: 'resolveEmojiID',
    code: `
  $resolveEmojiID[LerefMoney]
  `
});
```