---
title: $guildAFKChannelID
description: '$guildAFKChannelID вернет голосовой канал гильдии AFK.'
id: guildAFKChannelID
---

`$guildAFKChannelID` вернет голосовой канал гильдии AFK

## Использование

```php
$guildAFKChannelID[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. |  да   |

## Пример(ы)

Это вернет голосовой канал вашей гильдии AFK:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
