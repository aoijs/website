---
title: $readyTimestamp
description: '$readyTimestamp вернёт метку времени бота, когда он будет готов.'
id: readyTimestamp
---

`$readyTimestamp` вернет временную отметку, когда бот был готов.

## Использование

```php
$readyTimestamp
```

## Пример(ы)

Это вернет ваш бот в последний раз после его начала/готовности:

```javascript
bot.command({
    name: 'readyTimestamp',
    code: `
  $readyTimestamp
  `
});
```
