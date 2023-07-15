---
title: '$message'
description: '$message will return given arguments of a message.'
id: message
---

`$message` will return given arguments of a message.

## Використання

```php
$message[index?]
```

## Параметри

| Поле   | Тип     | Опис                                                                                 | Обов'язковий |
| ------ | ------- | ------------------------------------------------------------------------------------ |:------------:|
| index? | integer | Which message argument will be returned, leave it empty to return the whole message. |      ні      |

## Приклад(и)

This will return your given message:

```javascript
bot.command({
    name: 'message',
    code: `
  You said: "$message"
  ` // [prefix]message Hello!
});
```
