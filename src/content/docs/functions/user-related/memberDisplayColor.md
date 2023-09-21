---
title: $memberDisplayColor
description: $memberDisplayColor will return the display color of a given user.
id: memberDisplayColor
---

`$memberDisplayColor` will return the display color of a given user.

## Usage

```php
$memberDisplayColor[guildID?;userID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |
| userID?  | integer | The ID of the user.  |  false   |

## Example(s)

This will return your display color:

```javascript
client.command({
  name: "memberDisplayColor",
  code: `
  $memberDisplayColor[$guildID;$authorID]
  `,
});
```
