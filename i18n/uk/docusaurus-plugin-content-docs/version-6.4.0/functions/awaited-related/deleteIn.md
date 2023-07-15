---
title: '$deleteIn'
description: '$deleteIn will delete a message after a given time.'
id: deleteIn
---

`$deleteIn` will delete a message after a given time.

## Використання

```php
$deleteIn[time]
```

## Параметри

| Поле | Тип            | Опис                                             | Обов'язковий |
| ---- | -------------- | ------------------------------------------------ |:------------:|
| time | string, number | After how much time the message will be deleted. |     так      |

## Приклад(и)

This will delete the sent message after five seconds:

```javascript
bot.command({
    name: 'deleteIn',
    code: `
  $deleteIn[5s]
  I'll delete this message in 5 seconds!
  `
});
```
