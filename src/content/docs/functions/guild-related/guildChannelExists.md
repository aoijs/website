---
title: $guildChannelExists
description: $guildChannelExists will check if a given guild channel exists.
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## Usage

```php
$guildChannelExists[guildID;channelResolver]
```

## Parameters

| Field                                                                                                                                          | Type                                                                                                | Description                                        | Required |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| guildID                                                                                                                                        | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the guild where the guild channel exists in. |   true   |
| channelResolver                                                                                                                                | [integer](https://developer.mozilla.org/en-US/docs/Web/                                             |
| JavaScript/Reference/Global_Objects/Integer),[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Channel ID or name of the channel.                                                                  | true                                               |

## Example(s)

This will check if a guild channel with the name `rules` exists, alternatively you could use the channel ID instead:

```javascript
client.command({
  name: "guildChannelExists",
  code: `
  $guildChannelExists[$guildID;rules]
  `,
});
```
