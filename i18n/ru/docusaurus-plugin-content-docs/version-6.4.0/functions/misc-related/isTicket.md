---
title: '$isTicket'
description: '$isTicket вернёт значение true или false в зависимости от канала как канала заявки.'
id: isTicket
---

`$isTicket` вернет значение true или false, в зависимости от канала как канала заявки.

## Использование

```php
$isTicket[channelID?]
```

## Параметры

| Название   | Nbg   | Описание   | Нужно |
| ---------- | ----- | ---------- |:-----:|
| ID канала? | целое | ID канала. | false |

## Пример(ы)

Это проверит, является ли текущий канал Заявок, созданный `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```