---
title: $displayName
description: $displayName will return the display name of a given user.
id: displayName
---

`$displayName` will return the display name of a given user.

## Usage

```php
$displayName[guildID?;userID?;returnUser?]
```

## Parameters

| Field       | Type    | Description                                                          | Required |
| ----------- | ------- | -------------------------------------------------------------------- | :------: |
| guildID?    | integer | The ID of the guild.                                                 |  false   |
| userID?     | integer | The ID of the user.                                                  |  false   |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will return your displayName, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
