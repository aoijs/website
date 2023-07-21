---
title: $guildRoleIconURL
description: '$guildRoleIconURL получит URL изображения значка роли.'
id: guildRoleIconURL
---

`$guildRoleIconURL` получит URL изображения значка роли.

## Использование

```php
$guildRoleIconURL[guildId?;roleId]
```

## Параметры

| Название    | Nbg   | Описание                                          | Нужно |
| ----------- | ----- | ------------------------------------------------- |:-----:|
| ID гильдии? | целое | ID гильдии, в которой существует роль.            | ложь  |
| roleId      | целое | ID роли, которую вы хотите проверить, существует. |  да   |

## Пример(ы)

Это вернет URL изображения значка роли:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```