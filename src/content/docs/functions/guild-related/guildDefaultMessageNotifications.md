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

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

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
