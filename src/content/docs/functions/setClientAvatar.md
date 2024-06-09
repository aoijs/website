---
title: $setClientAvatar
description: $setClientAvatar will change the clients' avatar.
id: setClientAvatar
---

`$setClientAvatar` will change the clients' avatar.

## Usage

```aoi
$setClientAvatar[URL]
```

## Parameters

| Field | Type                                                                                              | Description         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| URL   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new avatar URL. |   true   |

## Example(s)

This will change the client's avatar to the command author's user avatar:

```javascript
client.command({
    name: "setClientAvatar",
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```
