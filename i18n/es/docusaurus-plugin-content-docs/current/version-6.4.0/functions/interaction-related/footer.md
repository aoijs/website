---
title: '$footer'
description: '$footer will add a footer to an embed.'
id: footer
---

`$footer` will add a footer to an embed.

## Modo de uso

```php
$footer[index?;content;iconURL?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                       | Requerido |
| --------- | -------------- | -------------------------------- |:---------:|
| index?    | número         | Embed index.                     |    no     |
| contenido | cadena, número | Content of the footer text.      | verdadero |
| iconURL?  | string         | Footer Icon (bottom left image). |   falso   |

## Ejemplo(s)

This will create an embed with a footer and title:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `
});
```