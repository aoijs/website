---
title: '$description'
description: '$description se utiliza para incrustar para agregar un campo de descripción.'
id: description
---

`$description` se utiliza para incrustar para añadir un campo de descripción.

## Uso

```php
$description[indice?;descripcion]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                            | Requerido |
| ----------- | -------- | ----------------------------------------------------- |:---------:|
| índice?     | número   | El índice incrustado.                                 |   falso   |
| description | consulta | El contenido de la descripción de las incrustaciones. | verdadero |

## Ejemplo(s)

Esto enviará un incrustado con el contenido `aoi.js es genial!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```