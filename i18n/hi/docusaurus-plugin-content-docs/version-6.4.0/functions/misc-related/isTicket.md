---
title: '$isTicket'
description: '$isTicket will return either true or false depending on the channel being a ticket channel.'
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## प्रोयोग

```php
$isTicket[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन |    चाहिए     |
| ---------- | ------- | ------------ |:------------:|
| channelID? | integer | Channel ID.  | असत्य (नहीं) |

## ट्रू (हा)

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```