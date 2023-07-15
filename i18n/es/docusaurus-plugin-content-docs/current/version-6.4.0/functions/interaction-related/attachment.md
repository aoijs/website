---
title: '$attachment'
description: '$attachment will create an attachment.'
id: attachment
---

`$attachment` will create an attachment.

## Modo de uso

```php
$attachment[attachment;name;type?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                         | Requerido |
| ---------- | -------- | -------------------------------------------------- |:---------:|
| attachment | consulta | Content of the attachment, preferably a URL.       | verdadero |
| name       | consulta | Attachment name.                                   | verdadero |
| tipo?      | string   | Attachment type. <br /> 1. **URL** (default) |   falso   |

## Ejemplo(s)

This will create an attachment:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
