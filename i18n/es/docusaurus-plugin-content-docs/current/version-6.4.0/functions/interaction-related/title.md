---
title: '$title'
description: '$title add a title to an embed.'
id: title
---

`$title` add a title to an embed.

## Modo de uso

```php
$title[index?;title;URL?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                       | Requerido |
| ------ | -------- | -------------------------------- |:---------:|
| index? | número   | The index of the embed.          |    no     |
| title  | consulta | The content of the embed title.  | verdadero |
| URL?   | string   | URL which will be the hyperlink. |   falso   |

## Ejemplo(s)

This will create an embed with a title:

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`
});
```