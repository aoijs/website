---
title: $guildAFKChannelID
description: $guildAFKChannelID will return a guild's AFK voice channel.
id: guildAFKChannelID
---

`$guildAFKChannelID` will return a guild's AFK voice channel

## Usage

```php
$guildAFKChannelID[guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description          | Required |
| -------- | --------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild. |   true   |

## Example(s)

This will return the AFK voice channel of your guild:

```javascript
client.command({
  name: "guildAFKChannelID",
  code: `
  $guildAFKChannelID
  `,
});
```
