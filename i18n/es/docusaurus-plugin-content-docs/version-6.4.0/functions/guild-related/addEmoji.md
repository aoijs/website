---
title: '$addEmoji'
description: '$addEmoji añadirá un emoji al gremio dado. Si se proporcionan ID de función, solo los usuarios con una de las ID de función proporcionadas podrán utilizar el emoji.'
id: addEmoji
---

`$addEmoji` añadirá un emojis al gremio dado. Si se proporcionan ID de función, solo los usuarios con una de las ID de función proporcionadas podrán utilizar el emoji.

## Uso

```php
$addEmoji[ID de gremio;URL;nombre;volverEmoji?;razón?;...roles?]
```

## Parámetros

| Campo            | Tipo   | Descripción                                                    | Requerido |
| ---------------- | ------ | -------------------------------------------------------------- |:---------:|
| servidorID       | entero | ID del gremio                                                  | verdadero |
| URL              | cadena | URL de imagen válida                                           | verdadero |
| nombre           | cadena | nombre emoji                                                   | verdadero |
| ¿devolver Emoji? | cadena | ¿devolver los emoji creados?                                   |   falso   |
| ¿razón?          | cadena | razón que se mostrará en los registros de auditoría del gremio |   falso   |
| roles?           | entero | qué roles serán capaces de usar los emoji dados                |   falso   |

## Ejemplo(s)

Esto creará un emoji:

```javascript
bot.command({
    name: 'addEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
