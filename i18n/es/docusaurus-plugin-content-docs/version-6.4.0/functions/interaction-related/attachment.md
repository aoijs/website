---
title: '$attachment'
description: '$attachment creará un adjunto.'
id: attachment
---

`$attachment` creará un adjunto.

## Uso

```php
$attachment[adjunto;nombre;tipo?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                              | Requerido |
| ------- | -------- | ------------------------------------------------------- |:---------:|
| adjunto | consulta | Contenido del archivo adjunto, preferiblemente una URL. | verdadero |
| name    | consulta | Nombre del adjunto.                                     | verdadero |
| tipo?   | string   | Tipo de adjunto. <br /> 1. **URL** (por defecto)  |   falso   |

## Ejemplo(s)

Esto creará un archivo adjunto:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
