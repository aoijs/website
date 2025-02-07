---
title: $userNickname
description: $userNickname will return a user's nickname.
id: userNickname
---

`$userNickname` will return a user's nickname.

## Usage

```aoi
$userNickname[guildID?;userID?;returnUser?]
```

## Parameters

| Field       | Type                                                                                                | Description                                                          | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | :------: |
| guildID?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild.                                                 |  false   |
| userID?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the user.                                                  |  false   |
| returnUser? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the username <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will return your nickname, if you have none, it'll return your Discord username:

```javascript
client.command({
    name: "userNickname",
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
