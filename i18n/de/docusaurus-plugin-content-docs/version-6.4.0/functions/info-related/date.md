---
title: $date
description: '$date wird den Tag des Monats zurückgeben.'
id: date
---

`$date` wird den Tag des Monats zurückgeben.

## Verwendung

```php
$date
```

## Beispiel(e)

Dies wird den Tag des Monats zurückgeben, zum Beispiel `28`:

```javascript
bot.command({
    name: 'date',
    code: `
  $date
  `
});
```