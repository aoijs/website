---
title: '$getRoleColor'
description: '$getRoleColor will return the given role''s color.'
id: getRoleColor
---

`$getRoleColor` will return the given role's color.

## Використання

```php
$getRoleColor[roleId;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                     | Обов'язковий |
| -------- | ------- | -------------------------------------------------------- |:------------:|
| roleId   | integer | The ID of the role you want the color to be returned of. |     так      |
| guildID? | integer | The ID of the guild where the role exists in.            |      ні      |

## Приклад(и)

This will return the role ID of your highest role:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$highestRole]
  `
});
```