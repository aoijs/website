---
title: $guildDefaultMessageNotifications
description: $guildDefaultMessageNotifications will return given guild's default message notification type.
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications ` will return given guild's default message notification type.

## Usage

```php
$guildDefaultMessageNotifications[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the guild's default message notification type:

```javascript
client.command({
    name: "guildDefaultMessageNotifications",
    code: `
  $guildDefaultMessageNotifications
  `
});
```
