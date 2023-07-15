---
title: '$newTicket'
description: '$newTicket will create a new ticket channel.'
id: newTicket
---

`$newTicket` will create a new ticket channel.

## प्रोयोग

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                                                                       |    चाहिए     |
| ----------- | -------- | ---------------------------------------------------------------------------------- |:------------:|
| name        | स्ट्रिंग | Channel name.                                                                      |     true     |
| msg         | स्ट्रिंग | Start message.                                                                     |     true     |
| categoryID? | integer  | Where to place the channel after creation.                                         | असत्य (नहीं) |
| returnId?   | boolean  | Return the channel ID <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |
| error?      | स्ट्रिंग | Error to return when something went wrong.                                         | असत्य (नहीं) |

## ट्रू (हा)

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