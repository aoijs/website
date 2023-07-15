---
title: '$guildEmojiExists'
description: '$guildEmojiExists verificará si el emoji dado existe en el gremio dado.'
id: guildEmojiExists
---

`$guildEmojiExists` comprobará si el emoji dado existe en el gremio dado.

## Uso

```php
$guildEmojiExists[emojiResolver;servidorID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                             | Requerido |
| ------------- | -------- | -------------------------------------- |:---------:|
| emojiResolver | consulta | Emoji que quieres comprobar si existe. | verdadero |
| servidorID?   | entero   | ID del gremio donde existe el emoji.   |    no     |

## Ejemplo(s)

Esto devolverá `true` ya que el emoji ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) existe:

```javascript
bot.command({
    name: 'guildEmojiExists',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
