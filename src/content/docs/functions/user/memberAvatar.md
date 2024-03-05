---
title: $memberAvatar
description: $memberAvatar will return the profile picture of a guild member.
id: memberAvatar
---

`$memberAvatar` will return the profile picture of a guild member.

## Usage

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## Parameters

| Field    | Type                                                                                                | Description                               | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild.                      |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the user.                       |  false   |
| size?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The size of the image.                    |  false   |
| dynamic? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Image format.                             |  false   |

## Example(s)

This will return your profile picture:

```javascript
client.command({
  name: "memberAvatar",
  code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
