---
title: $lockThread
description: $lockThread will lock a specified thread.
id: lockThread
---

`$lockThread` will lock a specified thread.

## Usage

```php
$lockThread[channelID;threadID;reason?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                   | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel where the thread is a parent of.        |   true   |
| threadID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the thread which will be locked.                    |   true   |
| reason?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will lock a given thread:

```javascript
client.command({
  name: "lockThread",
  code: `
  $lockThread[$channelID;threadID;Example reason!]
  `
});
```
