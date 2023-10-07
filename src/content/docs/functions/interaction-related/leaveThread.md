---
title: $leaveThread
description: $leaveThread will make the bot leave a specific thread.
id: leaveThread
---

`$leaveThread` will make the bot leave a specific thread.

## Usage

```php
$leaveThread[channelID;threadID]
```

## Parameters

| Field     | Type    | Description                                              | Required |
| --------- | ------- | -------------------------------------------------------- | :------: |
| channelID | integer | The ID of the channel of where the thread is located in. |   true   |
| threadID  | integer | The ID of the thread.                                    |   true   |

## Example(s)

This will create a thread and make the bot leave after creation:

```javascript
client.command({
  name: "leaveThread",
  code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```
