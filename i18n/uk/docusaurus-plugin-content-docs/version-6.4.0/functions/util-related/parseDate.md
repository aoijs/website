---
title: '$parseDate'
description: '$parseDate will return the date/time for the given milliseconds'
id: parseDate
---

`$parseDate` $parseDate will return the date/time for the given milliseconds

## Використання

```php
$parseDate[ms;type?]
```

## Параметри

| Поле | Тип   | Опис                                                   | Обов'язковий |
| ---- | ----- | ------------------------------------------------------ |:------------:|
| ms   | рядок | Time in ms you want to parse.                          |     так      |
| тип? | рядок | The type in which the parsed date will be returned in. |      ні      |

### Types

| Тип  | Format                                                   |
| ---- | -------------------------------------------------------- |
| time | 1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds |
| date | 1/1/2023, 8:16:20 AM                                     |

## Приклад(и)

This will return your current date in the `date` [format](#types):

```javascript
bot.command({
    name: 'parseDate',
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
