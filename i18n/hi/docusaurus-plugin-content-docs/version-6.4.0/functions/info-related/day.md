---
title: '$day'
description: '$day will return the day of the month.'
id: day
---

`$day` will return the day of the month.

## प्रोयोग

```php
$day
```

## उदाहरण

This will return day of the month, for example, `thursday`:

```javascript
bot.command({
    name: 'day',
    code: `
  Today is: $day
  `
});
```