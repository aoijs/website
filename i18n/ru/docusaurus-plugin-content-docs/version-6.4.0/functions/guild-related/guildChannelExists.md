---
title: $guildChannelExists
description: '$guildChannelExists проверит наличие соответствующего канала гильдии.'
id: guildChannelExists
---

`$guildChannelExists` проверит наличие соответствующего канала гильдии.

## Использование

```php
$guildChannelExists[guildID;channelResolver]
```

## Параметры

| Название        | Nbg                 | Описание                                        | Нужно |
| --------------- | ------------------- | ----------------------------------------------- |:-----:|
| ID гильдии      | целое               | ID гильдии, в которой существует канал гильдии. |  да   |
| Резолвер канала | целое число, строка | ID канала или имя канала.                       |  да   |

## Пример(ы)

Это проверит существует ли канал с названием `правила` , вместо этого вы можете использовать ID канала:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
