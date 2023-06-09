---
title: $kick
description: $kick will remove a user from a given guild.
id: kick
---

`$kick` will remove a user from a given guild.

## Usage

```php
$kick[userID;guildID?;reason?]
```

## Parameters

| Field    | Type    | Description                                                   | Required |
| -------- | ------- | ------------------------------------------------------------- | :------: |
| userID   | integer | The ID of the user which will be removed from the guild.      |   true   |
| guildID? | integer | The ID of the guild where the user shall be removed from.     |  false   |
| reason?  | string  | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will kick someone from your guild:

```javascript
bot.command({
    name: 'kick',
    code: `
  <@$findMember[$message;false]> has been kicked!
  $kick[$findMember[$message;false];$guildID;Example reason!]
  `
});
```
