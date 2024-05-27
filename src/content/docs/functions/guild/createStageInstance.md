---
title: $createStageInstance
description: $createStageInstance will start a stage.
id: createStageInstance
---

`$createStageInstance` will start a stage.

## Usage

```aoi
$createStageInstance[channelID;topic;type?]
```

## Parameters

| Field     | Type                                                                                              | Description                              | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of the stage channel.     |   true   |
| topic     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The stage topic which will be displayed. |   true   |
| type?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The stage type. (listed below)           |  false   |

<details open>
  <summary>Invite Target Types</summary>

<table>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>VALUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STREAM</td>
      <td>1</td>
    </tr>
    <tr>
      <td>EMBEDDED_APPLICATION</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</details>

## Example(s)

This will create start a new stage instance:

```javascript
client.command({
    name: "createStageInstance",
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
