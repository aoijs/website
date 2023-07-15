---
title: '$createStageInstance'
description: '$createStageInstance will start a stage.'
id: createStageInstance
---

`$createStageInstance` will start a stage.

## Usage

```php
$createStageInstance[channelID;topic;type?]
```

## Parameters

| Field     | Type    | Description                              | Required |
| --------- | ------- | ---------------------------------------- |:--------:|
| channelID | integer | The channel ID of the stage channel.     |   true   |
| topic     | string  | The stage topic which will be displayed. |   true   |
| type?     | integer | The stage type. (listed below)           |  false   |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE    | VALUE |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## Example(s)

This will create start a new stage instance:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
