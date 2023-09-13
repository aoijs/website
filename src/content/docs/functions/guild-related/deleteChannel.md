---
title: $deleteChannel
description: $deleteChannel will delete a specific channel.
id: deleteChannel
---

`$deleteChannel` will delete a specific channel.

## Usage

```php
$deleteChannel[channelID]
```

## Parameters

| Field     | Type    | Description                                          | Required |
| --------- | ------- | ---------------------------------------------------- | :------: |
| channelID | integer | The channel ID of the channel which will be deleted. |   true   |

## Example(s)

This will delete the channel where the command was executed in:

```javascript
bot.command({
  name: "deleteChannel",
  code: `
  $deleteChannel[$channelID]
  `,
});
```
