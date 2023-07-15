---
title: '$messagePing'
description: '$messagePing will return the latency of the message.'
id: messagePing
---

`$messagePing` will return the latency of the message.

## Використання

```php
$messagePing
```

## Приклад(и)

This will return the latency of your message:

```javascript
bot.command({
    name: 'messagePing',
    code: `
  $messagePing
  `
});
```
