---
title: $isVideoOn
description: $isVideoOn checks if the given user has their video on in a voice channel.
id: isVideoOn
---

`$isVideoOn` checks if the given user has their video on in a voice channel.

## Usage

```php
$isVideoOn[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                                    | Required |
| -------- | ------- | -------------------------------------------------------------- | :------: |
| userID?  | integer | ID of the user who turned video on.                            |  false   |
| guildID? | integer | ID of the guild you want to check if they have their video on. |  false   |

## Example(s)

This will check if you're currently using the video feature in a voice channel:

```javascript
bot.command({
  name: "isVideoOn",
  code: `
  $isVideoOn[$authorID;$guildID]
  `,
});
```
