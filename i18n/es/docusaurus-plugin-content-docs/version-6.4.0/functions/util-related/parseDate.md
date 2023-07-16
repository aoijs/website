---
title: '$parseDate'
description: '$parseDate devolverá la fecha/hora para los milisegundos dados'
id: parseDate
---

`$parseDate` $parseDate retornará la fecha/hora para los milisegundos dados

## Uso

```php
$parseDate[ms;type?]
```

## Parámetros

| Campo | Tipo   | Descripción                                        | Requerido |
| ----- | ------ | -------------------------------------------------- |:---------:|
| m     | string | Tiempo en ms que desea analizar.                   |    sí     |
| tipo? | string | El tipo en el que se devolverá la fecha analizada. |    no     |

### Tipos

| Tipo   | Formatear                                                 |
| ------ | --------------------------------------------------------- |
| tiempo | 1 año, 1 semana, 6 días, 8 horas, 16 minutos, 20 segundos |
| fecha  | 1/1/2023, 8:16:20 AM                                      |

## Ejemplo(s)

Esto devolverá su fecha actual en la `date` [format](#types):

```javascript
bot.command({
    name: 'parseDate',
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
