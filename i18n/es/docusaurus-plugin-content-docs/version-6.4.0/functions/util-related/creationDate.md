---
title: '$creationDate'
description: '$creationDate devolverá la fecha de creación del usuario de Discord dado.'
id: creationDate
---

`$creationDate` devolverá la fecha de creación del usuario de Discord dado.

## Uso

```php
$creationDate[id;formato?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                        | Requerido |
| -------- | ------ | ---------------------------------------------------------------------------------- |:---------:|
| id       | entero | ID de usuario de quién desea obtener la fecha de creación de la que será devuelta. | verdadero |
| formato? | cadena | El formato de la fecha de creación (listado a continuación).                       |   falso   |

### Formato de Entrada

| Formato       | Producción                                                |
| ------------- | --------------------------------------------------------- |
| ms            | 1522158545409                                             |
| date          | 27/03/2018, 1:49:05 PM                                    |
| time          | 4 años, 9 meses, 6 días, 2 horas, 17 minutos, 33 segundos |
| time-full     | 4 años, 9 meses, 6 días, 2 horas, 17 minutos, 33 segundos |
| time-humanize | 4y 9mon 6d 2h 24m 30s                                     |

## Ejemplo(s)

Esto devolverá la fecha de creación de su cuenta:

```javascript
bot.command({
    name: 'creationDate',
    code: `
 Tu cuenta fue creada: $creationDate[$authorID;date]
  `
});
```
