---
title: '$newTicket'
description: '$newTicket will create a new ticket channel.'
id: newTicket
---

`$newTicket` will create a new ticket channel.

## Використання

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## Параметри

| Поле        | Тип     | Опис                                                                               | Обов'язковий |
| ----------- | ------- | ---------------------------------------------------------------------------------- |:------------:|
| назва       | рядок   | Channel name.                                                                      |     так      |
| msg         | рядок   | Start message.                                                                     |     так      |
| categoryID? | integer | Where to place the channel after creation.                                         |      ні      |
| returnId?   | boolean | Return the channel ID <br /> 1. **true** <br /> 2. **false** (default) |      ні      |
| error?      | рядок   | Error to return when something went wrong.                                         |      ні      |

## Приклад(и)

This will create a new ticket:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID!;$guildID;false;Error!]
    `
});
```

This will create a new ticket and send an embed:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID! {newEmbed:{description:<@$authorID> opened a new ticket!}};$guildID;false;Error!]
    `
});
```