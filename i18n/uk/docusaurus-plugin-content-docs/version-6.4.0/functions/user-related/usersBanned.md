---
title: '$usersBanned'
description: '$usersBanned will return the banned users of a guild.'
id: usersBanned
---

`$usersBanned` will return the banned users of a guild.

## Використання

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                     | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |:------------:|
| guildID? | integer | The guild ID.                                                                                                            |      ні      |
| force?   | boolean | 1. **true** <br /> 2. **false** (default)                                                                          |      ні      |
| option?  | рядок   | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values.                                                                          |      ні      |

## Приклад(и)

This will return the banned users of your guild as mention in an embed:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
