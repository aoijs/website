---
title: $isRoleEditable
description: '$isRoleEditable будет проверять, редактируется ли роль.'
id: isRoleEditable
---

`$isRoleEditable` проверит, можно ли редактировать роль.

## Использование

```php
$isRoleEditable[roleID;guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                           | Нужно |
| ----------- | ----- | -------------------------------------------------- |:-----:|
| roleID      | целое | ID роли, которую вы хотите проверить, редактируем. |  да   |
| ID гильдии? | целое | ID гильдии, в которой существует роль.             | false |

## Пример(ы)

Проверяет, редактируется ли роль `Владелец`:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
