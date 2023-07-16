---
title: $messagePing
description: '$messagePing вернёт задержку сообщения.'
id: messagePing
---

`$messagePing` возвращает задержку сообщения.

## Использование

```php
$messagePing
```

## Пример(ы)

Это вернет задержку вашего сообщения:

```javascript
bot.command({
    name: 'messagePing',
    code: `
  $messagePing
  `
});
```
