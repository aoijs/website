---
title: '$guildEmojiExists'
description: '$guildEmojiExists will check if the given emoji exists in the given guild.'
id: guildEmojiExists
---

`$guildEmojiExists` will check if the given emoji exists in the given guild.

## Modo de uso

```php
$guildEmojiExists[emojiResolver;guildId?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                              | Requerido |
| ------------- | -------- | --------------------------------------- |:---------:|
| emojiResolver | consulta | Emoji you want to check if it exists.   | verdadero |
| servidorID?   | entero   | ID of the guild where the emoji exists. |    no     |

## Ejemplo(s)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
bot.command({
    name: 'guildEmojiExists',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
