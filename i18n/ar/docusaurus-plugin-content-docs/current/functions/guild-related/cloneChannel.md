---
title: '$cloneChannel'
description: '$cloneChannel سيستنسخ قناة.'
id: cloneChannel
---

`$cloneChannel` سيقوم بنسخ الروم.

## الاستخدام

```php
$cloneChannel[channelID;name;returnID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                        | مطلوب |
| --------- | ------- | ------------------------------------------------------------------- |:-----:|
| channelID | Integer | اي دي الروم الذي سوف يتم نسخه.                                      | true  |
| name      | string  | الاسم الجديد للروم المستنسخة.                                       | true  |
| returnID? | string  | If the function should return the ID of the newly created channnel. | false |

**لن تستنسخ أي رسائل من الروم.**

## مثال

This will clone the current channel and name it "new channel":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```
