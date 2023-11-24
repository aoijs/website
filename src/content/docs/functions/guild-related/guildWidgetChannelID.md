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

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the widget channel ID of the current guild (if any):

```javascript
client.command({
  name: "guildWidgetChannelID",
  code: `
  $guildWidgetChannelID[$guildID]
  `
});
```
