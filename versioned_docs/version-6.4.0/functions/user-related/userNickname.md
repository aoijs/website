---
title: $userNickname
description: $userNickname will return a user's nickname.
id: userNickname
---

`$userNickname` will return a user's nickname.

## Usage

```php
$userNickname[guildID?;userID?;returnUser?]
```

## Parameters

| Field       | Type    | Description                                                          | Required |
| ----------- | ------- | -------------------------------------------------------------------- | :------: |
| guildID?    | integer | The ID of the guild.                                                 |  false   |
| userID?     | integer | The ID of the user.                                                  |  false   |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will return your nickname, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'userNickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
