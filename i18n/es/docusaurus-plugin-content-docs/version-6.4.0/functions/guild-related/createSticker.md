---
title: '$createSticker'
description: '$createSticker creará un sticker.'
id: createSticker
---

`$createSticker` creará una pegatina.

## Uso

```php
$createSticker[servidorID;URL;nombre;returnSticker?;tags;descripcion;razon]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                                   | Requerido |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------ |:---------:|
| servidorID     | entero   | ID del gremio del lugar en el que se creará la pegatina.                                                     | verdadero |
| URL            | consulta | URL de la imagen (**png sólo**).                                                                             | verdadero |
| nombre         | string   | El nombre de la etiqueta.                                                                                    | verdadero |
| returnSticker? | boolean  | Devuelve el sticker después de su creación. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| tags?          | cadena   | Etiquetas adhesivas.                                                                                         |   falso   |
| descripción?   | cadena   | La posición del elemento.                                                                                    |   falso   |
| ¿razón?        | cadena   | Razón que se mostrará en los registros de auditoría del gremio.                                              |   falso   |

## Ejemplo(s)

Esto creará un sticker llamado `Imagine`:

```javascript
bot.command({
    name: 'createSticker',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```
