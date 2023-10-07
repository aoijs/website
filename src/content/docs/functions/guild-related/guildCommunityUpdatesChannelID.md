---
title: $guildCommunityUpdatesChannelID
description: $guildCommunityUpdatesChannelID will return the guild's community updates channel.
id: guildCommunityUpdatesChannelID
---

`$guildCommunityUpdatesChannelID` will return the guild's community updates channel.

## Usage

```php
$guildCommunityUpdatesChannelID[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the community updates channel ID of the current guild (if any):

```javascript
client.command({
  name: "guildCommunityUpdatesChannelID",
  code: `
  $guildCommunityUpdatesChannelID[$guildID]
  `
});
```
