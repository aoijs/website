---
title: $memberDisplayName
description: $memberDisplayName will return the display name of a given user.
id: memberDisplayName
---

`$memberDisplayName` will return the display name of a given user.

## Usage

```php
$memberDisplayName[guildID?;userID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user.  |  false   |

## Example(s)

This will return your display name, if you have none then it'll return your Discord username:

```javascript
client.command({
    name: "memberDisplayName",
    code: `
  $memberDisplayName[$guildID;$authorID]
  `
});
```
