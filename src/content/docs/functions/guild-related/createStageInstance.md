---
title: $createStageInstance
description: $createStageInstance will start a stage.
id: createStageInstance
---

`$createStageInstance` will start a stage.

## Usage

```php
$createStageInstance[channelID;topic;type?]
```

## Parameters

| Field     | Type                                                                                              | Description                              | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of the stage channel.     |   true   |
| topic     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The stage topic which will be displayed. |   true   |
| type?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The stage type. (listed below)           |  false   |

<div class="details">
  <details open>
    <summary><h3>Invite Target Types</h3></summary>
  </details>
    <div class="content">
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PUBLIC</td>
            <td>1</td>
          </tr>
          <tr>
            <td>PRIVATE</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>

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
