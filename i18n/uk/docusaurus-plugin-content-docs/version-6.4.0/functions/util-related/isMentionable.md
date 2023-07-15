---
title: '$isMentionable'
description: '$isMentionable check if a given role is mentionable.'
id: isMentionable
---

`$isMentionable` check if a given role is mentionable.

## Використання

```php
$isMentionable[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                             | Обов'язковий |
| -------- | ------- | ------------------------------------------------ |:------------:|
| roleID   | integer | The role ID to check if it's mentionable or not. |     так      |
| guildID? | integer | ID of the guild where the role is present in.    |      ні      |

## Приклад(и)

This will check if a role with the name `Owner` is mentionable and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```
