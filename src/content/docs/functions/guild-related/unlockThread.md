---
title: $unlockThread
description: $unlockThread will unlock a specified thread.
id: unlockThread
---

`$unlockThread` will unlock a specified thread.

## Usage

```php
$unlockThread[channelID;threadID;reason?]
```

## Parameters

| Field     | Type    | Description                                                   | Required |
| --------- | ------- | ------------------------------------------------------------- | :------: |
| channelID | integer | The ID of the channel where the thread is a parent of.        |   true   |
| threadID  | integer | The ID of the thread which will be unlocked.                  |   true   |
| reason?   | string  | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will unlock a given thread:

```javascript
client.command({
  name: "unlockThread",
  code: `
  $unlockThread[$channelID;threadID;Example reason!]
  `,
});
```
