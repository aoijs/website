---
title: '$closeTicket'
description: '$closeTicket will delete a ticket created by `$newTicket`.'
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## Використання

```php
$closeTicket[error?]
```

## Параметри

| Поле   | Тип   | Опис             | Обов'язковий |
| ------ | ----- | ---------------- |:------------:|
| error? | рядок | Error to return. |      ні      |

## Приклад(и)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  `
});
```