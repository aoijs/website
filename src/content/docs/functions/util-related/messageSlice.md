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

| Field | Type   | Description                                | Required |
| ----- | ------ | ------------------------------------------ | :------: |
| from  | number | Starting point where to slice the message. |   true   |
| to?   | number | Ending point where slicing ends.           |  false   |

## Example(s)

This will slice the message from the first message to the fifth message:

```javascript
bot.command({
  name: "messageSlice",
  code: `
  $messageSlice[1;5]
  `,
});
```
