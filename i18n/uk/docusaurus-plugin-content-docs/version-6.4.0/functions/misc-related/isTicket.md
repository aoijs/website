---
title: '$isTicket'
description: '$isTicket will return either true or false depending on the channel being a ticket channel.'
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## Використання

```php
$isTicket[channelID?]
```

## Параметри

| Поле       | Тип     | Опис        | Обов'язковий |
| ---------- | ------- | ----------- |:------------:|
| channelID? | integer | Channel ID. |      ні      |

## Приклад(и)

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```