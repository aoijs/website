---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL will retrieve the image URL of the role icon.'
id: guildRoleIconURL
---

`$guildRoleIconURL` will retrieve the image URL of the role icon.

## Використання

```php
$guildRoleIconURL[guildId?;roleId]
```

## Параметри

| Поле     | Тип     | Опис                                           | Обов'язковий |
| -------- | ------- | ---------------------------------------------- |:------------:|
| guildId? | integer | ID of the guild where the role exists.         |      ні      |
| roleId   | integer | ID of the role you want to check if it exists. |     так      |

## Приклад(и)

This will return the image URL of the role icon:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```