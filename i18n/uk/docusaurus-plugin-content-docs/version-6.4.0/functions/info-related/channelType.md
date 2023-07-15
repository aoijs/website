---
title: '$channelType'
description: '$channelType will return the given channel''s type.'
id: channelType
---

`$channelType` will return the given channel's type.

## Використання

```php
$channelType[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                                        | Обов'язковий |
| ---------- | ------- | ----------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want the channel type to be returned. |      ні      |

## Приклад(и)

This will return the channel type of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```