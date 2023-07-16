---
title: '$isCustomEmoji'
description: '$isCustomEmoji will check if the given emoji is a custom emoji or not.'
id: isCustomEmoji
---

`$isCustomEmoji` will check if the given emoji is a custom emoji or not.

## Uso

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                       | Requerido |
| ------------- | -------- | ------------------------------------------------ |:---------:|
| emojiResolver | consulta | Emoji you want to check if it is a custom emoji. | verdadero |
| servidorID?   | entero   | ID of the guild where the emoji was created in.  |    no     |

## Ejemplo(s)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji is indeed a custom emoji:

```javascript
bot.command({
    name: 'isCustomEmoji',
    code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
