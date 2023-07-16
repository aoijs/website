---
title: '$getRoleColor'
description: '$getRoleColor вернет данный цвет роли.'
id: getRoleColor
---

`$getRoleColor` вернет данный цвет роли.

## Использование

```php
$getRoleColor[roleId;guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                              | Нужно |
| ----------- | ----- | ----------------------------------------------------- |:-----:|
| roleId      | целое | ID роли, которую вы хотите, чтобы цвет был возвращен. |  да   |
| ID гильдии? | целое | ID гильдии, в которой существует роль.                | ложь  |

## Пример(ы)

Это будет возвращать ID роли вашей высшей роли:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$highestRole]
  `
});
```