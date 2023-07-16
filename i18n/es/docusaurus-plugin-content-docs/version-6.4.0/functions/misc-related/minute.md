---
title: '$minute'
description: '$minute devolverá el minuto actual en CST.'
id: minute
---

`$minute` devolverá el minuto actual en CST.

## Uso

```php
$minute
```

## Ejemplo(s)

Esto devolverá el minuto actual:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute
    `
});
```

Puedes cambiar la zona horaria usando `$timezone`:

```javascript
bot.command({
    name: "hour",
    code: `
    $minute 
    $timezone[America/New_York]
    ` // devuelve la hora actual en New York
});
```