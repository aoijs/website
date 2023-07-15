---
title: '$guildRoles'
description: '$guildRoles will return all roles of a specific guild.'
id: guildRoles
---

`$guildRoles` will return all roles of a specific guild.

## Використання

```php
$guildRoles[guildID?;option?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                        | Обов'язковий |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild.                                                                                                        |      ні      |
| option?  | рядок   | The option on how to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values.                                                                             |      ні      |

## Приклад(и)

This will return all roles of your guild:

```javascript
bot.command({
    name: 'guildRoles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
