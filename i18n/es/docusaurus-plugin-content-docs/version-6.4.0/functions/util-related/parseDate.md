---
title: '$parseDate'
description: '$parseDate will return the date/time for the given milliseconds'
id: parseDate
---

`$parseDate` $parseDate will return the date/time for the given milliseconds

## Uso

```php
$parseDate[ms;type?]
```

## Parámetros

| Campo | Tipo   | Descripción                                            | Requerido |
| ----- | ------ | ------------------------------------------------------ |:---------:|
| ms    | string | Time in ms you want to parse.                          |    sí     |
| tipo? | string | The type in which the parsed date will be returned in. |    no     |

### Types

| Tipo   | Format                                                   |
| ------ | -------------------------------------------------------- |
| tiempo | 1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds |
| date   | 1/1/2023, 8:16:20 AM                                     |

## Ejemplo(s)

This will return your current date in the `date` [format](#types):

```javascript
bot.command({
    name: 'parseDate',
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
