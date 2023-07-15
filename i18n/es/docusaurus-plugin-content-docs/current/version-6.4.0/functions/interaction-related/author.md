---
title: '$author'
description: '$author will add an author field to an embed.'
id: author
---

`$author` will add an author field to an embed.

## Modo de uso

```php
$author[index?;name;iconURL?]
```

## Parámetros

| Campo    | Tipo     | Parámetros                                                 | Requerido |
| -------- | -------- | ---------------------------------------------------------- |:---------:|
| index?   | entero   | Embed index.                                               |    no     |
| name     | consulta | Author title that will be displayed.                       | verdadero |
| iconURL? | string   | Icon URL which will be displayed next to the author title. |   falso   |

## Ejemplo(s)

This will create an embed with description and author title:

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Hello!;$userAvatar[$authorID]]
  $description[Embed with author!]
  `
});
```
