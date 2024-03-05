---
title: $ban
description: $ban will ban a user of a given guild.
id: ban
---

`$ban` will ban a user of a guild.

## Usage

```php
$ban[guildID;userID;days?;reason?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | From which guild the user should be banned from.                |   true   |
| userID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user to ban.                                                |   true   |
| days?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Days of message history to delete, cannot be higher than 7 days |  false   |
| reason?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs.    |  false   |

## Example(s)

This will ban a random user of your guild:

```javascript
client.command({
  name: "ban",
  code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
