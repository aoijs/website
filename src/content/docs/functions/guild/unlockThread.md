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

| Field     | Type                                                                                              | Description                                                   | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel where the thread is a parent of.        |   true   |
| threadID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the thread which will be unlocked.                  |   true   |
| reason?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will unlock a given thread:

```javascript
client.command({
    name: "unlockThread",
    code: `
  $unlockThread[$channelID;threadID;Example reason!]
  `
});
```
