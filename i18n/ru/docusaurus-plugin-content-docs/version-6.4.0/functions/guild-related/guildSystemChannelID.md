---
title: $guildSystemChannelID
description: '$guildSystemChannelID вернет ID канала системы гильдии.'
id: guildSystemChannelID
---

`$guildSystemChannelID` вернет ID канала системы.

## Использование

```php
$guildSystemChannelID[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет ID системного канала гильдии:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
