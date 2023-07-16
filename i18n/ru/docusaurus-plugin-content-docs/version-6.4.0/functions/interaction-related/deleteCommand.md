---
title: '$deleteCommand'
description: '$deleteCommand удалит первоначальное сообщение команды.'
id: deleteCommand
---

`$deleteCommand` удалит первоначальное сообщение команды.

## Использование

```php
$deleteCommand
```

## Пример(ы)

Начальное сообщение команды будет удалено:

```javascript
bot.command({
    name: 'deleteCommand',
    code: `
  Hello!
  $deleteCommand
  `
});
```
