---
title: '$emojisFromMessage'
description: '$emojisFromMessage получит все эмодзи в сообщении.'
id: emojisFromMessage
---

`$emojisFromMessage` возвращает все эмодзи в заданном сообщении.

## Использование

```php
$emojisFromMessage
```

**Пожалуйста, обратите внимание, что ваш бот должен присутствовать в гильдии, в которой находится эмодзи.**

## Пример(ы)

Это вернет любые эмодзи, которые вы даете в качестве аргумента:

```javascript
bot.command({
    name: 'emojisFromMessage',
    code: `
$emojisFromMessage
  `
});
```
