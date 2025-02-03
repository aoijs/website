---
title: $voiceMemberCount
description: $voiceMemberCount will return the total amount of members in the specified voice channel.
id: voiceMemberCount
---

`$voiceMemberCount` will return the total amount of members in the specified voice channel.

## Usage

```aoi
$voiceMemberCount[channelID]
```

## Parameters

| Field     | Type                                                                                                                                                                                                 | Description                                                    | Required |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the voice channel.                                   |   true   |


## Example(s)

```javascript
client.command({
    name: "voiceMemberCount",
    code: `
  $voiceMemberCount[1182613173220675617] 
  $comment[Example ID value of a voice channel]
  `
});
```
