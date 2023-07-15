---
title: '$addField'
description: '$addField añadirá un campo en un incrustado.'
id: addField
---

`$addField` añadirá un campo en un incrustado.

## Uso

```php
$addField[campoTitulo;campo Descripción;en línea?]
```

## Parámetros

| Campo             | Tipo     | Parámetros                 | Requerido |
| ----------------- | -------- | -------------------------- |:---------:|
| campoTítulo?      | consulta | El título del campo.       | verdadero |
| campoDescripción? | consulta | Descripción del campo.     | verdadero |
| en línea?         | booleano | Si el campo está en línea. |   falso   |

## Ejemplo(s)

Esto enviará un incrustado con un campo y descripción:

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Ejemplo;Mira este!;false]
  $description[Hola!]
  `
});
```
