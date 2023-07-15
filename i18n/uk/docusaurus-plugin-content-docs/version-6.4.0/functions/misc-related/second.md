---
title: '$second'
description: '$second will return the current second in CST.'
id: second
---

`$second` will return the current second in CST.

## Використання

```php
$second
```

## Приклад(и)

This will returns the current second:

```javascript
bot.command({
    name: "second",
    code: `
    $second
    `
});
```

You can change the timezone using `$timezone`:

```javascript
bot.command({
    name: "second",
    code: `
    $second 
    $timezone[America/New_York]
    ` // returns current second in New York
});
```