---
title: '$fetchActiveThreads'
description: '$fetchActiveThreads will return all active threads of a given channel.'
id: fetchActiveThreads
---

`$fetchActiveThreads` will return all active threads of a given channel.

## Використання

```php
$fetchActiveThreads[channelID;option?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                        | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | Channel ID of the channel of which you want to fetch the active threads of.                 |     так      |
| option?   | рядок   | How to return the active threads. <br /> 1. **name** (default) <br /> 2. **id** |      ні      |

## Приклад(и)

This will return all active threads, if any:

```javascript
bot.command({
    name: 'fetchActiveThreads',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```