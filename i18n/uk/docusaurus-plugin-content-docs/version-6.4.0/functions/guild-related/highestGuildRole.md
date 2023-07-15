---
title: '$guildHighestRole'
description: '$guildHighestRole will return the highest guild role of a specific guild.'
id: guildHighestRole
---

`$guildHighestRole` will return the highest guild role of a specific guild.

## Використання

```php
$guildHighestRole[guildID?;option?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                       | Обов'язковий |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild.                                                                                                       |      ні      |
| option?  | рядок   | The option on how to return the role <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |      ні      |

## Приклад(и)

This will return the name of the highest role of your guild:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
