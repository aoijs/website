---
title: $guildMaxStageVideoChannelUsers
description: $guildMaxStageVideoChannelUsers will return the guild's max video channel users.
id: guildMaxStageVideoChannelUsers
---

`$guildMaxStageVideoChannelUsers` will return the guild's max video channel users.

## Usage

```php
$guildMaxStageVideoChannelUsers[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the max amount of stage video channel users of the current guild (if any):

```javascript
client.command({
    name: "guildMaxStageVideoChannelUsers",
    code: `
  $guildMaxStageVideoChannelUsers[$guildID]
  `
});
```
