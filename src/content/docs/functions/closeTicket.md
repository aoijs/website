---
title: $closeTicket
description: $closeTicket will delete a ticket created by `$newTicket`.
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## Usage

```aoi
$closeTicket[error?]
```

## Parameters

| Field  | Type                                                                                              | Description      | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| error? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return. |  false   |

## Example(s)

```javascript
client.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  `
});
```
