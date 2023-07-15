---
title: '$rolePosition'
description: '$rolePosition will return the role position of a specific role.'
id: rolePosition
---

`$rolePosition` will return the role position of a specific role.

## Використання

```php
$rolePosition[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| roleID   | integer | The role ID.  |     так      |
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the role position of any role you might like, for this example, we'll use the `@everyone` role:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
