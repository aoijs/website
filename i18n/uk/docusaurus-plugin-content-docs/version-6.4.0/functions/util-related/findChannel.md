---
title: '$findChannel'
description: '$findChannel will search a given channel by its name.'
id: findChannel
---

`$findChannel` will search a given channel by its name.

## Використання

```php
$findChannel[channelResolver;returnSelf?]
```

## Параметри

| Поле            | Тип     | Опис                                                                                                    | Обов'язковий |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------- |:------------:|
| channelResolver | рядок   | Name of the channel you want to search for.                                                             |     так      |
| returnSelf?     | boolean | Will return the channel where the command is executed in by default if the given channel was not found. |      ні      |

## Приклад(и)

This will return `882360051640193054` as it was able to find the `#⊂・⊃﹐aoi_v5` channel:

```javascript
bot.command({
    name: 'findChannel',
    code: `
  $findChannel[⊂・⊃﹐aoi_v5;false]
  `
});
```
