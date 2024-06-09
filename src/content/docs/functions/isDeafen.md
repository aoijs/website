---
title: $isDeafen
description: $isDeafen will check if a certain user is deafened or not.
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## Usage

```aoi
$isDeafen[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                               | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | User ID you want to check if they're deafened,            |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID where you want to check if they're deafened. |  false   |

## Example(s)

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
client.command({
    name: "isDeafen",
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
