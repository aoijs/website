---
title: '$newTicket'
description: '$newTicket will create a new ticket channel.'
id: newTicket
---

`$newTicket` will create a new ticket channel.

## الاستخدام

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                                | مطلوب |
| ----------- | ------- | ----------------------------------------------------------- |:-----:|
| name        | string  | Channel name.                                               | true  |
| msg         | string  | Start message.                                              | true  |
| categoryID? | Integer | Where to place the channel after creation.                  | false |
| returnId?   | boolean | Return the channel ID <br /> 1. true. false (default) | false |
| error?      | string  | Error to return when something went wrong.                  | false |

## مثال

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