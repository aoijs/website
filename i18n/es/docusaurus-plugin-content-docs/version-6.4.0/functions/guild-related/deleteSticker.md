---
title: '$deleteSticker'
description: '$deleteSticker eliminará un sticker dado.'
id: deleteSticker
---

`$deleteSticker` creará una pegatina.

## Uso

```php
$deleteSticker[servidorID;sticker]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                               | Requerido |
| ---------- | -------- | -------------------------------------------------------- |:---------:|
| servidorID | entero   | El ID de la hermandad de donde están ubicados los roles. | verdadero |
| sticker    | consulta | El nombre del sticker.                                   | verdadero |

## Ejemplo(s)

Esto eliminará una etiqueta de tu gremio (asegúrate de proporcionar un nombre real de la etiqueta ):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```