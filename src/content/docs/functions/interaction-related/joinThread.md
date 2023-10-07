---
title: $joinThread
description: $joinThread will make the bot join a specific thread.
id: joinThread
---

`$joinThread` will make the bot join a specific thread.

## Usage

```php
$joinThread[channelID;threadID]
```

## Parameters

| Field     | Type    | Description                                       | Required |
| --------- | ------- | ------------------------------------------------- | :------: |
| channelID | integer | The channel ID of where the thread is located in. |   true   |
| threadID  | integer | The ID of the thread.                             |   true   |

## Example(s)

This will create a thread in the current channel and add the bot to it:

```javascript
client.command({
  name: "joinThread",
  code: `
  $joinThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```
