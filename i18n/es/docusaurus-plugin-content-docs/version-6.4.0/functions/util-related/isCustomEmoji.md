---
title: '$isCustomEmoji'
description: '$isCustomEmoji comprobará si el emoji dado es un emoji personalizado o no.'
id: isCustomEmoji
---

`$isCustomEmoji` comprobará si el emoji dado es un emoji personalizado o no.

## Uso

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## Parámetros

| Campo                | Tipo     | Parámetros                                                | Requerido |
| -------------------- | -------- | --------------------------------------------------------- |:---------:|
| resolutor de emojios | consulta | Emoji que quieres comprobar si es un emoji personalizado. | verdadero |
| servidorID?          | entero   | ID del gremio en el que se crearon los emojis.            |    no     |

## Ejemplo(s)

Esto devolverá `verdadero` como el emoji ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) es realmente un emojis personalizado:

```javascript
bot.command({
    name: 'isCustomEmoji',
    code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
