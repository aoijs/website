---
title: '$deleteSticker'
description: '$deleteSticker will delete a given sticker.'
id: deleteSticker
---

`$deleteSticker` will delete a given sticker.

## Modo de uso

```php
$deleteSticker[guildID;sticker]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                       | Requerido |
| ---------- | -------- | ------------------------------------------------ |:---------:|
| servidorID | entero   | The guild ID of where the sticker is located in. | verdadero |
| sticker    | consulta | The name of the sticker.                         | verdadero |

## Ejemplo(s)

This will delete a sticker of your guild ( make sure to provide an actual sticker name ):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```