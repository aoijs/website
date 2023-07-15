---
title: '$createStageInstance'
description: '$createStageInstance will start a stage.'
id: createStageInstance
---

`$createStageInstance` will start a stage.

## الاستخدام

```php
$createStageInstance[channelID;topic;type?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                             | مطلوب |
| --------- | ------- | ---------------------------------------- |:-----:|
| channelID | Integer | The channel ID of the stage channel.     | true  |
| topic     | string  | The stage topic which will be displayed. | true  |
| النوع?    | Integer | The stage type. (listed below)           | false |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE    | VALUE |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## مثال

This will create start a new stage instance:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
