---
title: '$cloneChannel'
description: '$cloneChannel will clone a channel.'
id: cloneChannel
---

`$cloneChannel` will clone a channel.

## प्रोयोग

```php
$cloneChannel[channelID;name;returnID?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------------- |:------------:|
| channelID | integer  | The ID of the channel which is to clone.                            |     true     |
| name      | स्ट्रिंग | The new name of the cloned channel.                                 |     true     |
| returnID? | स्ट्रिंग | If the function should return the ID of the newly created channnel. | असत्य (नहीं) |

**It won't clone any messages of that channel.**

## ट्रू (हा)

This will clone the current channel and name it "new channel":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```
