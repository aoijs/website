---
title: '$thumbnail'
description: '$thumbnail add a thumbnail to an embed (upper right corner image).'
id: thumbnail
---

`$thumbnail` add a thumbnail to an embed (upper right corner image).

## Modo de uso

```php
$thumbnail[index?;URL]
```

## Parámetros

| Campo  | Tipo     | Parámetros            | Requerido |
| ------ | -------- | --------------------- |:---------:|
| index? | número   | Embed position/index. |    no     |
| URL    | consulta | Thumbnail Image URL.  | verdadero |

## Ejemplo(s)

This will create an embed with your user avatar in it:

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`
});
```