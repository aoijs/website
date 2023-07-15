---
title: '$closeTicket'
description: '$closeTicket will delete a ticket created by `$newTicket`.'
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## الاستخدام

```php
$closeTicket[error?]
```

## البارامترات

| Field  | النوع  | الديسكبربشين     | مطلوب |
| ------ | ------ | ---------------- |:-----:|
| error? | string | Error to return. | false |

## مثال

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  `
});
```