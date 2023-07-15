---
title: '$title'
description: '$title añade un título a un incrustado.'
id: title
---

`$title` añade un título a un incrustado.

## Uso

```php
$title[indice?;titulo;URL?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                            | Requerido |
| ------- | -------- | ----------------------------------------------------- |:---------:|
| índice? | número   | El índice del embed.                                  |   falso   |
| título  | consulta | El contenido de la descripción de las incrustaciones. | verdadero |
| URL?    | string   | URL que será el hiperlink.                            |   falso   |

## Ejemplo(s)

Esto creará un incrustado con un título:

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`
});
```