---
title: '$roleName'
description: '$roleName will return the name of a specific role.'
id: roleName
---

`$roleName` will return the name of a specific role.

## Використання

```php
$roleName[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                           | Обов'язковий |
| -------- | ------- | -------------------------------------------------------------- |:------------:|
| roleID   | integer | The role ID of which you want the role name to be returned of. |     так      |
| guildID? | integer | The guild ID.                                                  |      ні      |

## Приклад(и)

This will return the role name of any role you may like, in this case, It would return `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
