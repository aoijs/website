---
title: '$description'
description: '$description is used for embeds to add an description field.'
id: description
---

`$description` is used for embeds to add an description field.

## Modo de uso

```php
$description[index?;description]
```

## Parámetros

| Campo       | Tipo     | Parámetros                             | Requerido |
| ----------- | -------- | -------------------------------------- |:---------:|
| index?      | número   | The embed index.                       |    no     |
| description | consulta | The content of the embeds description. | verdadero |

## Ejemplo(s)

This will send an embed with the content `aoi.js is great!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```