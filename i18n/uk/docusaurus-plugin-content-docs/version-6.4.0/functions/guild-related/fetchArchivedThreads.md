---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads will return all archived threads of a given channel.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` will return all archived threads of a given channel.

## Використання

```php
$fetchArchivedThreads[channelID;option?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                          | Обов'язковий |
| --------- | ------- | --------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | Channel ID of the channel of which you want to fetch the achived threads of.                  |     так      |
| option?   | рядок   | How to return the archived threads. <br /> 1. **name** (default) <br /> 2. **id** |      ні      |

## Приклад(и)

This will return all archived threads, if any:

```javascript
bot.command({
    name: 'fetchArchivedThreads',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```
