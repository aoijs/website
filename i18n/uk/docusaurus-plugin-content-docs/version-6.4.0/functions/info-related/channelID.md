---
title: '$channelID'
description: '$channelID will return the channel ID of the given channel name.'
id: channelID
---

`$channelID` will return the channel ID of the given channel name.

## Використання

```php
$channelID[name?]
```

## Параметри

| Поле  | Тип     | Опис                                                    | Обов'язковий |
| ----- | ------- | ------------------------------------------------------- |:------------:|
| name? | integer | Channel name of the channel you want the channel ID of. |      ні      |

## Приклад(и)

This will return the channel ID of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```