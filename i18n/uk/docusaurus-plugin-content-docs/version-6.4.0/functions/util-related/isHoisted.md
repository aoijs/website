---
title: '$isHoisted'
description: '$isHoisted will check if a specific role is hoisted.'
id: isHoisted
---

`$isHoisted` will check if a specific role is hoisted.

## Використання

```php
$isHoisted[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                                       | Обов'язковий |
| -------- | ------- | -------------------------------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if it's hoisted or not.                   |     так      |
| guildID? | integer | The ID of the guild where you want to check if the role is hoisted or not. |      ні      |

## Приклад(и)

This will check if a role called `Owner` is hoisted in your server:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```
