---
title: '$createRole'
description: '$createRole will create a new guild role.'
id: createRole
---

`$createRole` will create a new guild role.

## Використання

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## Параметри

| Поле           | Тип     | Опис                                                   | Обов'язковий |
| -------------- | ------- | ------------------------------------------------------ |:------------:|
| guildID        | integer | The ID of the guild where the role will be created in. |     так      |
| returnID       | boolean | Return the ID of the newly created role?               |     так      |
| назва          | рядок   | The name of the new role.                              |     так      |
| color          | integer | The color of the new role.                             |     так      |
| icon           | рядок   | The image URL that will be used as icon.               |      ні      |
| hoist          | boolean | If the new role should be hoisted.                     |     так      |
| unicodeEmoji   | рядок   | The unicodeEmoji that will be used as icon.            |      ні      |
| position       | integer | The position of the role, 1 being the very bottom.     |     так      |
| mentionable    | boolean | If the role is mentionable by `@everyone`.             |     так      |
| ...permissions | рядок   | Permissions the role will have.                        |      ні      |

## Приклад(и)

This will create a new role called "Bird" in the color of red:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```
