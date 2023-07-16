---
title: '$isValidImageLink'
description: '$isValidImageLink comprobará si el enlace de imagen dado es válido.'
id: isValidImageLink
---

`$isValidImageLink` comprobará si el enlace de imagen dado es válido.

## Uso

```php
$isValidImageLink[URL]
```

## Parámetros

| Campo | Tipo   | Parámetros                | Requerido |
| ----- | ------ | ------------------------- |:---------:|
| URL   | string | Enlace de imagen directa. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` ya que el enlace de imagen dado es válido:

```javascript
bot.command({
    name: 'isValidImageLink',
    code: `
  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]
  `
});
```
