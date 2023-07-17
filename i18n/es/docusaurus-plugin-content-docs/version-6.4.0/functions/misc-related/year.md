---
title: '$year'
description: '$year devolverá el año actual en CST.'
id: year
---

`$year` devolverá el año actual en CST.

## Uso

```php
$year
```

## Ejemplo(s)

Esto devolverá el año actual:

```javascript
bot.command({
    name: "year",
    code: `
    $year
    `
});
```

Puedes cambiar la zona horaria usando `$timezone`:

```javascript
bot.command({
    name: "year",
    code: `
    $year 
    $timezone[America/New_York]
    ` // devuelve el año actual en Nueva York
});
```