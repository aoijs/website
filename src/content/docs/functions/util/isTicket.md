---
title: $isTicket
description: $isTicket will return either true or false depending on the channel being a ticket channel.
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## Usage

```php
$isTicket[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID. |  false   |

## Example(s)

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
client.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```
