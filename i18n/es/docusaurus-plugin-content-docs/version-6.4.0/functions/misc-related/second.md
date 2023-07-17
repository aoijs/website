---
title: '$second'
description: '$second devolverá el segundo actual en CST.'
id: second
---

`$second` devolverá el segundo actual en CST.

## Uso

```php
$second
```

## Ejemplo(s)

Esto devolverá el segundo actual:

```javascript
bot.command({
    name: "second",
    code: `
    $second
    `
});
```

Puedes cambiar la zona horaria usando `$timezone`:

```javascript
bot.command({
    name: "hour",
    code: `
    $second 
    $timezone[America/New_York]
    ` // devuelve la hora actual en New York
});
```