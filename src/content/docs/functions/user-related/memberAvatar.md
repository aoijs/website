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

| Field    | Type    | Description                               | Required |
| -------- | ------- | ----------------------------------------- | :------: |
| guildID? | integer | The ID of the guild.                      |  false   |
| userID?  | integer | The ID of the user.                       |  false   |
| size?    | integer | The size of the image.                    |  false   |
| dynamic? | boolean | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | string  | Image format.                             |  false   |

## Example(s)

This will return your profile picture:

```javascript
bot.command({
  name: "memberAvatar",
  code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `,
});
```
