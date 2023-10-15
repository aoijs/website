---
title: $modifyEmoji
description: $modifyEmoji will modify a given custom emoji.
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## Usage

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## Parameters

| Field     | Type                                                                                              | Description                                           | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| guildID   | integer                                                                                           | The ID of the guild of where the emoji is located in. |   true   |
| emojiID   | integer                                                                                           | The Emoji ID.                                         |   true   |
| name      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new emoji name.                                   |   true   |
| ...roles? | integer                                                                                           | Roles that will be able to use that emoji.            |  false   |

## Example(s)

This will edit a existing emoji / change its name to "Example":

```javascript
client.command({
  name: "modifyEmoji",
  code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `,
});
```
