---
title: $unban
description: $unban will unban a given user.
id: unban
---

`$unban` will unban a given user.

## Usage

```php
$unban[guildID;userID;reason?]
```

## Parameters

| Field   | Type    | Description                                                                | Required |
| ------- | ------- | -------------------------------------------------------------------------- | :------: |
| guildID | integer | The guild ID of where the user is banned in.                               |   true   |
| userID  | integer | The ID of the user which will be unbanned.                                 |   true   |
| reason? | string  | The reason for the unban that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will unban a given user:

```javascript
client.command({
  name: "unban",
  code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```
