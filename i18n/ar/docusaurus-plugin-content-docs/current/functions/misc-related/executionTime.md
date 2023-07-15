---
title: '$executionTime'
description: '$executionTime will return the execution time.'
id: executionTime
---

`$executionTime` will return the execution time.

## الاستخدام

```php
$executionTime
```

## مثال

This will return the execution time of how long it took to execute this code:

```javascript
bot.command({
    name: "executionTime",
    code: `
    This took: $executionTime MS
  `
});
```