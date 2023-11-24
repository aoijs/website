---
title: $newTicket
description: $newTicket will create a new ticket channel.
id: newTicket
---

`$newTicket` will create a new ticket channel.

## Usage

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## Parameters

| Field       | Type                                                                                                | Description                                                            | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | :------: |
| name        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Channel name.                                                          |   true   |
| msg         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Start message.                                                         |   true   |
| categoryID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Where to place the channel after creation.                             |  false   |
| returnId?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the channel ID <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| error?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Error to return when something went wrong.                             |  false   |

## Example(s)

This will create a new ticket:

```javascript
client.command({
  name: "newTicket",
  code: `
    $newTicket[ticket-$username;Hello <@$authorID!;$guildID;false;Error!]
    `
});
```

This will create a new ticket and send an embed:

```javascript
client.command({
  name: "newTicket",
  code: `
    $newTicket[ticket-$username;Hello <@$authorID! {newEmbed:{description:<@$authorID> opened a new ticket!}};$guildID;false;Error!]
    `
});
```
