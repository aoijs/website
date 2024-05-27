---
title: $modifyEmoji
description: $modifyEmoji will modify a given custom emoji.
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## Usage

```aoi
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## Parameters

| Field     | Type                                                                                              | Description                                           | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| guildID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild of where the emoji is located in. |   true   |
| emojiID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Emoji ID.                                         |   true   |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new emoji name.                                   |   true   |
| ...roles? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Roles that will be able to use that emoji.            |  false   |

## Example(s)

This will edit a existing emoji / change its name to "Example":

```javascript
client.command({
    name: "modifyEmoji",
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
