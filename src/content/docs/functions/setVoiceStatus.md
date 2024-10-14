---
title: $setVoiceStatus
description: $setVoiceStatus will set voice status to the specified voice channel
id: setVoiceStatus
---

`$setVoiceStatus` will set voice status to the specified voice channel.

## Usage

```aoi
$setVoiceStatus[channelID,voiceStatus]
```

## Parameters

| Field       | Type                                                                                                                                                                                                 | Description                                                    | Required |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | :------: |
| channelID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the voice channel.                                   |   true   |
| voiceStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The voice status you want to set.                              |   true   |


## Example(s)

```javascript
client.command({
    name: "setVoiceStatus",
    code: `
  $setVoiceStatus[1182613173220675617;Voice status text]
  $comment[Example ID value of a voice channel]
  `
});
```
