---
title: $allEmojisCount
description: $allEmojisCount will return the amount of emojis of a given type.
id: allEmojisCount
---

`$allEmojisCount` will return the amount of emojis of a given type.

## Usage

```php
$allEmojisCount[type?]
```

## Parameters

| Field | Type   | Description                                 | Required |
| ----- | ------ | ------------------------------------------- | -------- |
| type? | string | Type you want the amount of to be returned. | false    |

| Emoji Type      |          |
| --------------- | -------- |
| Animated Emojis | animated |
| Stable Emojis   | normal   |

## Example(s)

This will return the amount of emojis in your guild:

```javascript
client.command({
  name: "allEmojisCount",
  code: `
  $allEmojisCount
  `,
});
```
