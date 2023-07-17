---
title: $isRoleManaged
description: '$isRoleManaged проверяет, управляется ли определенной ролью Discord.'
id: isRoleManaged
---

`$isRoleManaged` проверит управляет ли определенная роль Discord.

## Использование

```php
$isRoleManaged[roleID;guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                                              | Нужно |
| ----------- | ----- | --------------------------------------------------------------------- |:-----:|
| roleID      | целое | ID роли, которую вы хотите проверить, управляется ли Discord или нет. |  да   |
| ID гильдии? | целое | ID гильдии, в которой существует роль.                                | false |

## Пример(ы)

Это проверяет, управляется ли роль `Server Booster` Discord и возвращает `true` или `false`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
