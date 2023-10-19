---
title: $deleteStageInstance
description: $deleteStageInstance will end an existing stage instance.
id: deleteStageInstance
---

`$deleteStageInstance` will end an existing stage instance.

## Usage

```php
$deleteStageInstance[channelID]
```

## Parameters

| Field     | Type                                                                                                | Description                                         | Required |
| --------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| channelID | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The stage channel ID of the current stage instance. |   true   |

## Example(s)

This will end the current stage instance: ( make sure to replace stageID with an actual stage ID )

```javascript
client.command({
  name: "deleteStageInstance",
  code: `
  $deleteStageInstance[stageInstance]
  `,
});
```
