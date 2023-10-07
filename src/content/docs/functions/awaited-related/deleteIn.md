---
title: $deleteIn
description: $deleteIn will delete a message after a given time.
id: deleteIn
---

`$deleteIn` will delete a message after a given time.

## Usage

```php
$deleteIn[time]
```

## Parameters

| Field | Type           | Description                                      | Required |
| ----- | -------------- | ------------------------------------------------ | :------: |
| time  | string, number | After how much time the message will be deleted. |   true   |

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
