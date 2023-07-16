---
title: '$hour'
description: '$hour devolverá la hora actual en CST.'
id: hour
---

`$hour` devolverá la hora actual en CST.

## Uso

```php
$hour
```

## Ejemplo(s)

Esto devolverá la hora actual:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour
    `
});
```

Puedes cambiar la zona horaria usando `$timezone`:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour 
    $timezone[America/New_York]
    ` // devuelve la hora actual en New York
});
```