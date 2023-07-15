---
title: '$addField'
description: '$addField will add a field in an embed.'
id: addField
---

`$addField` will add a field in an embed.

## Modo de uso

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## Parámetros

| Campo             | Tipo     | Parámetros                    | Requerido |
| ----------------- | -------- | ----------------------------- |:---------:|
| fieldTitle?       | consulta | The title of the field.       | verdadero |
| fieldDescription? | consulta | The description of the field. | verdadero |
| inline?           | booleano | If the field is inline.       |   falso   |

## Ejemplo(s)

This will send an embed with a field and description:

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Example;Look at this!;false]
  $description[Hello!]
  `
});
```
