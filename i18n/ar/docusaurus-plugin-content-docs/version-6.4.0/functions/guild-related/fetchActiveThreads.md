---
title: '$fetchActiveThreads'
description: '$fetchActiveThreads will return all active threads of a given channel.'
id: fetchActiveThreads
---

`$fetchActiveThreads` will return all active threads of a given channel.

## الاستخدام

```php
$fetchActiveThreads[channelID;option?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                | مطلوب |
| --------- | ------- | ------------------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | Channel ID of the channel of which you want to fetch the active threads of.                 | true  |
| option?   | string  | How to return the active threads. <br /> 1. **name** (default) <br /> 2. **id** | false |

## مثال

This will return all active threads, if any:

```javascript
bot.command({
    name: 'fetchActiveThreads',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```