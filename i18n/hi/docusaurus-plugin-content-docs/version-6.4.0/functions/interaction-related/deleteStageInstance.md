---
title: '$deleteStageInstance'
description: '$deleteStageInstance will end an existing stage instance.'
id: deleteStageInstance
---

`$deleteStageInstance` will end an existing stage instance.

## प्रोयोग

```php
$deleteStageInstance[channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                        | चाहिए |
| --------- | ------- | --------------------------------------------------- |:-----:|
| channelID | integer | The stage channel ID of the current stage instance. | true  |

## ट्रू (हा)

This will end the current stage instance: ( make sure to replace stageID with an actual stage ID )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```