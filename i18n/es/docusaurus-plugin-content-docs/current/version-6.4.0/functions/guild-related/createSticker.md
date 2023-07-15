---
title: '$createSticker'
description: '$createSticker will create a sticker.'
id: createSticker
---

`$createSticker` will create a sticker.

## Modo de uso

```php
$createSticker[guildID;URL;name;returnSticker?;tags;description;reason]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                              | Requerido |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID     | entero   | Guild ID of where the sticker will be created in.                                                       | verdadero |
| URL            | consulta | Image URL (**png only**).                                                                               | verdadero |
| nombre         | string   | The sticker name.                                                                                       |    sí     |
| returnSticker? | boolean  | Return the sticker after its creation. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| tags?          | cadena   | Sticker tags.                                                                                           |    no     |
| descripción?   | cadena   | The description of the sticker.                                                                         |   falso   |
| ¿razón?        | cadena   | Razón que se mostrará en los registros de auditoría del gremio.                                         |   falso   |

## Ejemplo(s)

This will create a sticker called `Imagine`:

```javascript
bot.command({
    name: 'createSticker',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```
