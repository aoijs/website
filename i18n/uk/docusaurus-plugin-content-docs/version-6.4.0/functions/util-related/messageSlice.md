---
title: '$messageSlice'
description: '$messageSlice will slice a message.'
id: messageSlice
---

`$messageSlice` will slice a message.

## Використання

```php
$messageSlice[from;to?]
```

## Параметри

| Поле | Тип    | Опис                                       | Обов'язковий |
| ---- | ------ | ------------------------------------------ |:------------:|
| from | number | Starting point where to slice the message. |     так      |
| to?  | number | Ending point where slicing ends.           |      ні      |

## Приклад(и)

This will slice the message from the first message to the fifth message:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```
