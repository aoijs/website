---
title: '$emojisFromMessage'
description: '$emojisFromMessage отримуватиме всі емоції в повідомленні.'
id: emojisFromMessage
---

`$emojisFromMessage` повертає всі емодзі в заданому повідомленні.

## Використання

```php
$emojisFromMessage
```

**Зверніть увагу, що ваш бот повинен бути присутнім в гільдії в якій знаходяться емодзі.**

## Приклад(и)

Це дозволить повернути емоджі, які ви подаєте в якості аргументу:

```javascript
bot.command({
    name: 'emojisFromMessage',
    код: `
$emojisFromMessage
  `
});
```
