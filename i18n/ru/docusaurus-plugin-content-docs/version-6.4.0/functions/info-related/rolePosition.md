---
title: $rolePosition
description: '$rolePosition будет возвращать позицию определенной роли.'
id: rolePosition
---

`$rolePosition` вернёт роль определенной роли.

## Использование

```php
$rolePosition[roleID;guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| roleID      | целое | ID роли.    |  да   |
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернёт позицию роли любой роли, которую вы можете захотеть, для этого примера мы будем использовать роль `@everyone`:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
