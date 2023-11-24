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

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the safety channel ID of the current guild (if any):

```javascript
client.command({
  name: "guildSafetyChannelID",
  code: `
  $guildSafetyChannelID[$guildID]
  `
});
```
