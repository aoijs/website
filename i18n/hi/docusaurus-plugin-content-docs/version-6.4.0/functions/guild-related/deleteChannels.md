---
title: '$deleteChannels'
description: '$deleteChannels will delete multiple channels.'
id: deleteChannels
---

`$deleteChannels` will delete multiple channels.

## प्रोयोग

```php
$deleteChannels[...channels]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                           | चाहिए |
| ----------- | ------- | ------------------------------------------------------ |:-----:|
| ...channels | integer | The channel Ids of the channels which will be deleted. | true  |

## ट्रू (हा)

This will delete multiple channels, make sure to replace the arguments:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
