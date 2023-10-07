---
title: $deleteEmojis
description: $deleteEmojis will delete multiple emoji.
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## Usage

```php
$deleteEmojis[...emojis]
```

## Parameters

| Field  | Type   | Description                                                     | Required |
| ------ | ------ | --------------------------------------------------------------- | :------: |
| emojis | string | Emoji Name, ID or full form of the emoji which will be deleted. |   true   |

## Example(s)

This will delete two random emojis of your guild:

```javascript
client.command({
  name: "deleteEmojis",
  code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
