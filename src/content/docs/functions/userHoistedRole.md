---
title: $userHoistedRole
description: $userHoistedRole will return the user's highest role.
id: userHoistedRole
---

`$userHoistedRole` will return the user's highest role.

## Usage

```aoi
$userHoistedRole[userID?;guildID?;option?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                             | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID.                                                            |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID.                                                           |  false   |
| option?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How the role will be returned.<br />1. **id** (default)<br />2. **mention** |  false   |

## Example(s)

This will return the ID of your highest role:

```js
client.command({
    name: "userHoistedRole",
    code: `$userHoistedRole[$authorID;$guildID;id]`
});
```
