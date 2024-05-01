---
title: $disconnectUser
description: $disconnectUser disconnects the user from the voice or stage channel.
id: disconnectUser
---

`$disconnectUser` disconnects the user from the voice or stage channel.

## Usage

```php
$disconnectUser[userID;guildID;reason?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID.                                                 |   true   |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID.                                                |   true   |
| reason? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild’s audit logs. |  false   |

## Example(s)

This will disconnect the mentioned user from the current channel (if its voice or stage channel):

```js
client.command({
    name: "disconnectUser",
    code: `$disconnectUser[$mentioned[1];$guildID]`
});
```
