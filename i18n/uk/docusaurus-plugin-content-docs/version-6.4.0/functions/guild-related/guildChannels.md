---
title: '$guildChannels'
description: '$guildChannels will return all channels of a specific guild.'
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## Використання

```php
$guildChannels[guildID?;option?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                          | Обов'язковий |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild.                                                                                                          |      ні      |
| option?  | рядок   | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values.                                                                               |      ні      |

## Приклад(и)

This will return all channels of your guild:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
