---
title: $guildWidgetChannelID
description: $guildWidgetChannelID will return the guild's widget channel ID.
id: guildWidgetChannelID
---

`$guildWidgetChannelID` will return the guild's widget channel ID.

## Usage

```php
$guildWidgetChannelID[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the widget channel ID of the current guild (if any):

```javascript
bot.command({
  name: "guildWidgetChannelID",
  code: `
  $guildWidgetChannelID[$guildID]
  `,
});
```
