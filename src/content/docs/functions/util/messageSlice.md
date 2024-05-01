---
title: $messageSlice
description: $messageSlice will slice a message.
id: messageSlice
---

`$messageSlice` will slice a message.

## Usage

```php
$messageSlice[from;to?]
```

## Parameters

| Field | Type                                                                                              | Description                                | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | :------: |
| from  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Starting point where to slice the message. |   true   |
| to?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Ending point where slicing ends.           |  false   |

## Example(s)

This will slice the message from the first message to the fifth message:

```javascript
client.command({
    name: "messageSlice",
    code: `
  $messageSlice[1;5]
  `
});
```
