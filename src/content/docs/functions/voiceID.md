---
title: $voiceID
description: $voiceID will return the current or given voice ID of a user.
id: voiceID
---

`$voiceID` will return the current or given voice ID of a user.

## Usage

```aoi
$voiceID[userID?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                           | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user you want to retrieve the current voice channel of. |  false   |

## Example(s)

This will return your current voice channel ID (if any):

```javascript
client.command({
    name: "voiceID",
    code: `
    $voiceID[$authorID]
  `
});
```
