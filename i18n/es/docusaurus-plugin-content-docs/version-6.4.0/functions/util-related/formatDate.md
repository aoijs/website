---
title: '$formatDate'
description: '$formatDate formateará una fecha determinada.'
id: formatDate
---

`$formatDate` formateará una fecha determinada.

## Uso

```php
$formatDate[fecha;formato?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                 | Requerido |
| -------- | ------ | --------------------------------------------------------------------------- |:---------:|
| fecha    | número | La fecha que desea formatear.                                               | verdadero |
| formato? | cadena | El formato que se utilizará para mostrar la fecha (listado a continuación). |   falso   |

<details open>
  <summary> <h2> Formateo posible </h2></summary>

| Formato |                                                                 | Devueltos |
| ------- | --------------------------------------------------------------- | ---------:|
| dddd    | Devuelve la semana, lunes, martes, miércoles ...                |    Cadena |
| dd      | Devuelve la abreviatura del día de la semana, Lun, Mar, Mié ... |    Cadena |
| D       | Obtiene el día del mes                                          |    Número |
| DD      | Obtiene el día del mes                                          |    Cadena |
| DDD     | Devuelve el día del año, 256, 257 ...                           |    Número |
| M / MM  | Devuelve el día del año, 10, 11 ...                             |    Número |
| MMM     | Devuelve la abreviatura del día de la semana, Lun, Mar, Mié ... |    Cadena |
| MMMM    | Devuelve el mes completamente Enero, Febrero ...                |    Cadena |
| YYYY    | Devuelve el año en su totalidad, 2020, 2021 ...                 |    Número |
| YY      | Devuelve el día del año, 20, 21 ...                             |    Número |

</details>

## Ejemplo(s)

Esto devolverá tu fecha actual en el formato `dddd, DD MMMM YYYY`:

```javascript
bot.command({
    name: 'formatDate',
    code: `
  $formatDate[$dateStamp;dddd, DD MMMM YYYY]
  `
});
```
