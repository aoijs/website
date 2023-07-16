---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode возвращает медленный режим канала в секундах.'
id: getChannelSlowmode
---

`$getChannelSlowmode` возвращает режим замедления канала в секундах.

## Использование

```php
$getChannelSlowmode[channelID?]
```

## Параметры

| Название   | Nbg   | Описание                                                         | Нужно |
| ---------- | ----- | ---------------------------------------------------------------- |:-----:|
| ID канала? | целое | Код канала, из которого будет возвращен режим замедления канала. | ложь  |

## Пример(ы)

Это вернёт режим замедления канала, в котором вы выполняете команду:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  Текущий медленный режим канала: $getChannelSlowmode[$channelID] секунд!
  «
});
```