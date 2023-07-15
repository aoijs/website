---
title: '$parseDate'
description: '$parseDate will return the date/time for the given milliseconds'
id: parseDate
---

`$parseDate` $parseDate will return the date/time for the given milliseconds

## प्रोयोग

```php
$parseDate[ms;type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                           |    चाहिए     |
| ----- | -------- | ------------------------------------------------------ |:------------:|
| ms    | स्ट्रिंग | Time in ms you want to parse.                          |     true     |
| टाइप? | स्ट्रिंग | The type in which the parsed date will be returned in. | असत्य (नहीं) |

### Types

| टाइप | Format                                                   |
| ---- | -------------------------------------------------------- |
| time | 1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds |
| date | 1/1/2023, 8:16:20 AM                                     |

## ट्रू (हा)

This will return your current date in the `date` [format](#types):

```javascript
bot.command({
    name: 'parseDate',
    code: `
  $parseDate[$dateStamp;date]
  `
});
```
