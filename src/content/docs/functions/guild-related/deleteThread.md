---
title: $deleteThread
description: $deleteThread will delete a given thread of a channel.
id: deleteThread
---

`$deleteThread` will delete a given thread of a channel.

## Usage

```php
$deleteThread[channelID;threadID;reason?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                   | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel where the thread exists in.             |   true   |
| threadID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The thread ID.                                                |   true   |
| reason?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will delete a thread of the channel where you execute the command in ( make sure to replace threadID with an actual
thread ID ):

```javascript
client.command({
  name: "deleteThread",
  code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```
