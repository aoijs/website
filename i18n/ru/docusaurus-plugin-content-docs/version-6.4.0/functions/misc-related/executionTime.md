---
title: $executionTime
description: '$executionTime вернет время выполнения.'
id: executionTime
---

`$executionTime` возвращает время выполнения.

## Использование

```php
$executionTime
```

## Пример(ы)

Время выполнения будет возвращено, сколько времени потребовалось для выполнения этого кода:

```javascript
bot.command({
    name: "executionTime",
    code: `
    Это так: $executionTime MS
  `
});
```