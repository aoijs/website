---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads will return all archived threads of a given channel.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` will return all archived threads of a given channel.

## الاستخدام

```php
$fetchArchivedThreads[channelID;option?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                  | مطلوب |
| --------- | ------- | --------------------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | Channel ID of the channel of which you want to fetch the achived threads of.                  | true  |
| option?   | string  | How to return the archived threads. <br /> 1. **name** (default) <br /> 2. **id** | false |

## مثال

This will return all archived threads, if any:

```javascript
bot.command({
    name: 'fetchArchivedThreads',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```
