---
title: '$fetchActiveThreads'
description: '$fetchActiveThreads will return all active threads of a given channel.'
id: fetchActiveThreads
---

`$fetchActiveThreads` will return all active threads of a given channel.

## प्रोयोग

```php
$fetchActiveThreads[channelID;option?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer  | Channel ID of the channel of which you want to fetch the active threads of.                 |     true     |
| option?   | स्ट्रिंग | How to return the active threads. <br /> 1. **name** (default) <br /> 2. **id** | असत्य (नहीं) |

## ट्रू (हा)

This will return all active threads, if any:

```javascript
bot.command({
    name: 'fetchActiveThreads',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```