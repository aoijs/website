---
title: $deleteEmoji
description: $deleteEmoji will delete a specific emoji.
id: deleteEmoji
---

`$deleteEmoji` will delete a specific emoji.

## Usage

```php
$deleteEmoji[emoji]
```

## Parameters

| Field | Type   | Description                                                     | Required |
| ----- | ------ | --------------------------------------------------------------- | :------: |
| emoji | string | Emoji Name, ID or full form of the emoji which will be deleted. |   true   |

## Example(s)

This will delete a random emoji of your guild:

```javascript
client.command({
  name: "deleteEmoji",
  code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
