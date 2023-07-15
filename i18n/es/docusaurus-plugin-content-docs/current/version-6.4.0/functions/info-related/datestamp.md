---
title: '$datestamp'
description: '$datestamp will return the day in MS.'
id: datestamp
---

`$datestamp` will return the day in MS.

## Modo de uso

```php
$datestamp
```

## Ejemplo(s)

This will return day of the month, in MS ( we're using $humanizeMS to make it readable ):

```javascript
bot.command({
    name: 'datestamp',
    code: `
  $humanizeMS[$datestamp]
  `
});
```