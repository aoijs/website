---
title: '$closeTicket'
description: '$closeTicket will delete a ticket created by `$newTicket`.'
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## प्रोयोग

```php
$closeTicket[error?]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन     |    चाहिए     |
| ------ | -------- | ---------------- |:------------:|
| error? | स्ट्रिंग | Error to return. | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  `
});
```