---
title: $clientTyping
description: '$clientTyping сделает ваш бот типом в канале (покажите что он печатает).'
id: clientTyping
---

`$clientTyping` сделает ваш бот типом канала (покажет, что он печатает).

## Использование

```php
$clientTyping
```

## Пример(ы)

Отображается ваш бот как печатающий и отправляющий «Привет!» как сообщение:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Hello!
  $clientTyping
  `
});
```
