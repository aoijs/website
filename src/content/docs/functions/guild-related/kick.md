---
title: $kick
description: $kick will remove a user from a given guild.
id: kick
---

`$kick` will remove a user from a given guild.

## Usage

```php
$kick[guildID;userID;reason?]
```

## Parameters

| Field   | Type    | Description                                                   | Required |
| ------- | ------- | ------------------------------------------------------------- | :------: |
| guildID | integer | The ID of the guild where the user shall be removed from.     |   true   |
| userID  | integer | The ID of the user which will be removed from the guild.      |   true   |
| reason? | string  | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will kick someone from your guild:

```javascript
client.command({
  name: "kick",
  code: `
  <@$findMember[$message;false]> has been kicked!
  $kick[$guildID;$findMember[$message;false];Example reason!]
  `,
});
```
