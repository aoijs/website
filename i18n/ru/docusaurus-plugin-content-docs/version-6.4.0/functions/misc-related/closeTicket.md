---
title: $closeTicket
description: '$closeTicket удалит тикет, созданный `$newTicket`.'
id: closeTicket
---

`$closeTicket` удалит Заявку, созданную `$newTicket`.

## Использование

```php
$closeTicket[error?]
```

## Параметры

| Название | Nbg    | Описание         | Нужно |
| -------- | ------ | ---------------- |:-----:|
| ошибка?  | строка | Ошибка возврата. | false |

## Пример(ы)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  «
});
```