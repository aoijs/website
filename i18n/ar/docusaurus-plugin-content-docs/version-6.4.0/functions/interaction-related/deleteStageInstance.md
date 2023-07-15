---
title: '$deleteStageInstance'
description: '$deleteStageInstance will end an existing stage instance.'
id: deleteStageInstance
---

`$deleteStageInstance` will end an existing stage instance.

## الاستخدام

```php
$deleteStageInstance[channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                        | مطلوب |
| --------- | ------- | --------------------------------------------------- |:-----:|
| channelID | Integer | The stage channel ID of the current stage instance. | true  |

## مثال

This will end the current stage instance: ( make sure to replace stageID with an actual stage ID )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```