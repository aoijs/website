---
title: '$minute'
description: '$minute will return the current minute in CST.'
id: minute
---

`$minute` will return the current minute in CST.

## Uso

```php
$minute
```

## Ejemplo(s)

This will returns the current minute:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute
    `
});
```

You can change the timezone using `$timezone`:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute 
    $timezone[America/New_York]
    ` // returns current minute in New York
});
```