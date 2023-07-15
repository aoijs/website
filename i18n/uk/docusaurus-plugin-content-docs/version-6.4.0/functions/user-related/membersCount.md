---
title: '$membersCount'
description: '$membersCount will return a guild''s member count.'
id: membersCount
---

`$membersCount` will return a guild's member count.

## Використання

```php
$membersCount[guildID?;presence?;countBot?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                                                                                                | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?  | integer | The ID of the guild.                                                                                                                                                |      ні      |
| presence? | рядок   | The presence of the users <br /> 1. **all** (default) <br /> 2. **dnd** <br /> 3. **idle** <br /> 4. **offline** <br /> 5. **online** |      ні      |
| countBot? | boolean | Count bots? <br /> 1. **true** (default) <br /> 2. **false**                                                                                            |      ні      |

## Приклад(и)

This will return the amount of offline users (including bots) in your guild:

```javascript
bot.command({
    name: 'membersCount',
    code: `
  $membersCount[$guildID;offline;true]
  `
});
```
