---
title: $isChannelManageable
description: '$isChannelManageable проверит работоспособность канала или нет.'
id: isChannelManageable
---

`$isChannelManageable` проверяет, является ли канал управляемым или нет.

## Использование

```php
$isChannelManageable[channelID?]
```

## Параметры

| Название   | Nbg   | Описание                                                 | Нужно |
| ---------- | ----- | -------------------------------------------------------- |:-----:|
| ID канала? | целое | ID канала для проверки работоспособности канала или нет. | ложь  |

## Пример(ы)

Это вернет `true` или `false` в зависимости от того, в каком канале вы выполняете команду управляемо:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
