---
title: $userStatus
description: $userStatus will return a user's presence.
id: userStatus
---

`$userStatus` will return a user's presence.

## Usage

```aoi
$userStatus[guildId?;userId?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | :------: |
| guildId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of which guild you want to retrieve the status of. |  false   |
| userId?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user you want to return the status of.            |  false   |

## Example(s)

This will either return `idle` `online` `invisible` or `dnd` depending on your current presence:

```javascript
client.command({
    name: "userStatus",
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
