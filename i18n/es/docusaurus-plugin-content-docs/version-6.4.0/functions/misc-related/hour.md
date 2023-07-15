---
title: '$hour'
description: '$hour will return the current hour in CST.'
id: hour
---

`$hour` will return the current hour in CST.

## Modo de uso

```php
$hour
```

## Ejemplo(s)

This will returns the current hour:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour
    `
});
```

You can change the timezone using `$timezone`:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour 
    $timezone[America/New_York]
    ` // returns current hour in New York
});
```