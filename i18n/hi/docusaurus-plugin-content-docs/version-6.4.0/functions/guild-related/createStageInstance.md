---
title: '$createStageInstance'
description: '$createStageInstance will start a stage.'
id: createStageInstance
---

`$createStageInstance` will start a stage.

## प्रोयोग

```php
$createStageInstance[channelID;topic;type?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                             |    चाहिए     |
| --------- | -------- | ---------------------------------------- |:------------:|
| channelID | integer  | The channel ID of the stage channel.     |     true     |
| topic     | स्ट्रिंग | The stage topic which will be displayed. |     true     |
| टाइप?     | integer  | The stage type. (listed below)           | असत्य (नहीं) |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE    | VALUE |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## ट्रू (हा)

This will create start a new stage instance:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
