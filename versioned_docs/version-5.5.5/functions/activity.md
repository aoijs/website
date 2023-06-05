---
title: $activity
description: $activity allows you to get the activity of a user.
id: activity
---

This function shows the current activity of the indicated user \(Only if it detects any activity\), if the indicated user does not have an activity such as a 'custom status' it will show 'none'.

## Usage

```php
$activity[guildID;userID?]
```

## Parameters

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| guildID | To see, user's activity for specific guild | number | yes |
| userID | The ID of the user to see activity | number | no |

## Activity Types

* Custom Status
* Spotify _\(Listening to Spotify\)_
* Game Name _\(Playing ...\)_
* Streaming

## Examples

### Without optional fields:

This returns the activity of the user who executed the command.

```javascript
bot.command({
  name: "activity",
  code: `
  $activity[$guildID]
  `
});
```

### With optional fields:

The `$userID` parameter is optional, if it is not provided, the activity of the user who executed the command will be shown.

```javascript
bot.command({
  name: "activity",
  code: `
  $activity[$guildID;$userID]
  `
});
```

