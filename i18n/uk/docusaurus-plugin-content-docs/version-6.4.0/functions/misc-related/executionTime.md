---
title: $executionTime
description: '$executionTime поверне час виконання.'
id: executionTime
---

`$executionTime` поверне час виконання.

## Використання

```php
$executionTime
```

## Приклад(и)

Це поверне час виконання процесу, скільки часу необхідно було виконати цей код:

```javascript
bot.command({
    name: "executionTime",
    код: `
    Це теж: $executionTime MS
  `
});
```