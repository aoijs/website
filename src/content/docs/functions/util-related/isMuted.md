---
title: $isMuted
description: $isMuted will check if a specific user is muted within a voice channel.
id: isMuted
---

`$isMuted` will check if a specific user is muted within a voice channel.

## Usage

```php
$isMuted[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                        | Required |
| -------- | ------- | -------------------------------------------------- | :------: |
| userID   | integer | ID of the user you want to check if they're muted. |   true   |
| guildID? | integer | ID of the guild where the user is muted in.        |   true   |

## Example(s)

This will check if you're currently muted in a voice channel and returns either `true` or `false`:

```javascript
bot.command({
  name: "isMuted",
  code: `
  $isMuted[$authorID;$guildID]
  `,
});
```
