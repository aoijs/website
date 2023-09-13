---
title: $guildSafetyChannelID
description: $guildSafetyChannelID will return the guild's safety channel.
id: guildSafetyChannelID
---

`$guildSafetyChannelID` will return the guild's safety channel.

## Usage

```php
$guildSafetyChannelID[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the safety channel ID of the current guild (if any):

```javascript
bot.command({
  name: "guildSafetyChannelID",
  code: `
  $guildSafetyChannelID[$guildID]
  `,
});
```
