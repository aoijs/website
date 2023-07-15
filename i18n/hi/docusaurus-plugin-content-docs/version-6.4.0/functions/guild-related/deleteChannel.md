---
title: '$deleteChannel'
description: '$deleteChannel will delete a specific channel.'
id: deleteChannel
---

`$deleteChannel` will delete a specific channel.

## प्रोयोग

```php
$deleteChannel[channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                         | चाहिए |
| --------- | ------- | ---------------------------------------------------- |:-----:|
| channelID | integer | The channel ID of the channel which will be deleted. | true  |

## ट्रू (हा)

This will delete the channel where the command was executed in:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
