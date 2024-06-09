---
title: $deleteEmojis
description: $deleteEmojis will delete multiple emoji.
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## Usage

```aoi
$deleteEmojis[...emojis]
```

## Parameters

| Field  | Type                                                                                              | Description                                                     | Required |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | :------: |
| emojis | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji Name, ID or full form of the emoji which will be deleted. |   true   |

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
