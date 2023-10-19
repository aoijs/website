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

| Field    | Type                                                                                                | Description          | Required |
| -------- | --------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild. |  false   |

## Example(s)

This will return the community updates channel ID of the current guild (if any):

```javascript
client.command({
  name: "guildCommunityUpdatesChannelID",
  code: `
  $guildCommunityUpdatesChannelID[$guildID]
  `,
});
```
