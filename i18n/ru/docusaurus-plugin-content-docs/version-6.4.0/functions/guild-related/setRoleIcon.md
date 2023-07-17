---
title: $setRoleIcon
description: '$setRoleIcon установит иконку для определенной роли.'
id: setRoleIcon
---

`$setRoleIcon` установит значок определенной роли.

## Использование

```php
$setRoleIcon[guildID;roleID;icon]
```

## Параметры

| Название   | Nbg    | Описание                               | Нужно |
| ---------- | ------ | -------------------------------------- | ----- |
| ID гильдии | целое  | ID гильдии, в которой существует роль. | ложь  |
| roleID     | целое  | ID роли.                               | ложь  |
| иконка     | строка | URL значка.                            | ложь  |

## Пример(ы)

Это изменит значок данной роли на указанный значок:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```