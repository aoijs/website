---
title: '$image'
description: '$image will add an image to an embed.'
id: image
---

`$image` will add an image to an embed.

## Modo de uso

```php
$image[index?;URL]
```

## Parámetros

| Campo  | Tipo     | Parámetros                      | Requerido |
| ------ | -------- | ------------------------------- |:---------:|
| index? | número   | Embed index                     |    no     |
| URL    | consulta | Embed Image URL. (bottom image) | verdadero |

## Ejemplo(s)

This will create an embed with an image, title and footer:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```