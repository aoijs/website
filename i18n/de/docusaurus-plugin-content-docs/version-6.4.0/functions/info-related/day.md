---
title: $day
description: '$day wird den Tag des Monats zurückgeben.'
id: day
---

`$day` wird den Tag des Monats zurückgeben.

## Verwendung

```php
$day
```

## Beispiel(e)

Dies wird den Tag des Monats zurückgeben, zum Beispiel, `Donnerstag,`:

```javascript
bot.command({
    name: 'day',
    code: `
  Heute ist: $day
  `
});
```