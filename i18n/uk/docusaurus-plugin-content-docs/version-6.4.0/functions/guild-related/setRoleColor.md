---
title: '$setRoleColor'
description: '$setRoleColor will set a roles'' color.'
id: setRoleColor
---

`$setRoleColor` will set a roles' color.

## Використання

```php
$setRoleColor[roleID;color]
```

## Параметри

| Поле   | Тип     | Опис                                      | Обов'язковий |
| ------ | ------- | ----------------------------------------- |:------------:|
| roleID | integer | The ID of the role that will be modified. |     так      |
| color  | рядок   | The new (hex) color.                      |     так      |

## Приклад(и)

This will change a random role's color to red:

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```