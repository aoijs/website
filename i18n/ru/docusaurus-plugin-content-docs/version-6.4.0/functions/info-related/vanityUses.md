---
title: $vanityUses
description: '$vanityUses вернет использование персонального URL.'
id: vanityUses
---

`$vanityUses` возвращает использование персонального URL.

## Использование

```php
$vanityUses[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет использование персонального URL вашей гильдии, если таковой имеется:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
