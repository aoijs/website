---
title: $closeTicket
description: $closeTicket will delete a ticket created by `$newTicket`.
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## Usage

```php
$closeTicket[error?]
```

## Parameters

| Field  | Type   | Description      | Required |
| ------ | ------ | ---------------- | :------: |
| error? | string | Error to return. |  false   |

## Example(s)

```javascript
bot.command({
  name: "closeTicket",
  code: `
  $closeTicket[Something went wrong!]
  `,
});
```
