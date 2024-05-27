---
title: $deleteIn
description: $deleteIn will delete a message after a given time.
id: deleteIn
---

`$deleteIn` will delete a message after a given time.

## Usage

```aoi
$deleteIn[time]
```

## Parameters

| Field | Type                                                                                                                                                                                                 | Description                                      | Required |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| time  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | After how much time the message will be deleted. |   true   |

## Example(s)

This will delete the sent message after five seconds:

```javascript
client.command({
    name: "deleteIn",
    code: `
  $deleteIn[5s]
  I'll delete this message in 5 seconds!
  `
});
```
