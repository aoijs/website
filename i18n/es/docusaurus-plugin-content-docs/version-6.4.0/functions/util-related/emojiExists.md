---
title: '$emojiExists'
description: '$emojiExists verificará si existe el emoji dado.'
id: emojiExists
---

`$emojiExists` verificará si existe el emoji dado.

## Uso

```php
$emojiExists[Resolución de emojis]
```

## Parámetros

| Campo                | Tipo   | Parámetros                             | Requerido |
| -------------------- | ------ | -------------------------------------- |:---------:|
| resolutor de emojios | cadena | Emoji que quieres comprobar si existe. | verdadera |

## Ejemplo(s)

Esto devolverá `true` ya que el emoji ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) existe:

```javascript
bot.command({
    name: 'emojiExists',
    code: `
  $emojiExists[<:LerefMoney:1003365344724910191>]
  `
});
```
