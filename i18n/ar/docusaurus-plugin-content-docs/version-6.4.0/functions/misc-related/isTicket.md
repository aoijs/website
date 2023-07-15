---
title: '$isTicket'
description: '$isTicket will return either true or false depending on the channel being a ticket channel.'
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## الاستخدام

```php
$isTicket[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين | مطلوب |
| ---------- | ------- | ------------ |:-----:|
| channelID? | Integer | Channel ID.  | false |

## مثال

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```