---
title: '$mentionedRoles'
description: '$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.'
id: mentionedRoles
---

`$mentionedRoles` will return the ID of a role retrieved from a message.

## Використання

```php
$mentionedRoles[index]
```

## Параметри

| Поле   | Тип    | Опис                       | Обов'язковий |
| ------ | ------ | -------------------------- |:------------:|
| індекс | number | The index of the argument. |     так      |

## Приклад(и)

This will return the ID of the **first** role mention if you attempt to mention any role in this command:

```javascript
bot.command({
    name: 'mentionedRoles',
    code: `
  $mentionedRoles[1]
  `
});
```
