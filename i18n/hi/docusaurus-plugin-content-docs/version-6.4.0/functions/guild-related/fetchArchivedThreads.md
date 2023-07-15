---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads will return all archived threads of a given channel.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` will return all archived threads of a given channel.

## प्रोयोग

```php
$fetchArchivedThreads[channelID;option?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                  |    चाहिए     |
| --------- | -------- | --------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer  | Channel ID of the channel of which you want to fetch the achived threads of.                  |     true     |
| option?   | स्ट्रिंग | How to return the archived threads. <br /> 1. **name** (default) <br /> 2. **id** | असत्य (नहीं) |

## ट्रू (हा)

This will return all archived threads, if any:

```javascript
bot.command({
    name: 'fetchArchivedThreads',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```
