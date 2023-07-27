---
title: $banCount
description: '$banCount возвращает количество забаненных пользователей определенной гильдии.'
id: banCount
---

`$banCount` возвращает количество забаненных пользователей конкретной гильдии.

## Использование

```php
$banCount[guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                                                           | Нужно |
| ----------- | ----- | ---------------------------------------------------------------------------------- | ----- |
| ID гильдии? | целое | ID гильдии от которой вы хотите получить количество заблокированных пользователей. | ложь  |

#### Пожалуйста, обратите внимание, что боту требуются разрешения для `VIEW_AUDIT_LOG`

## Пример(ы)

Это вернет количество забаненных пользователей в вашей гильдии:

```javascript
bot.command({
    name: 'banCount',
    code: `
  $banCount
  `
});
```