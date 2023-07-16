---
title: $channelType
description: '$channelType вернет тип данного канала.'
id: channelType
---

`$channelType` возвращает тип данного канала.

## Использование

```php
$channelType[channelID?]
```

## Параметры

| Название   | Nbg   | Описание                            | Нужно |
| ---------- | ----- | ----------------------------------- |:-----:|
| ID канала? | целое | ID канала для возврата типа канала. | ложь  |

## Пример(ы)

Это вернёт тип канала канала, в котором вы выполняете команду:

```javascript
bot.command({
    имя: 'channelType',
    код: `
  $channelType[$channelID]
  `
});
```