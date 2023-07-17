---
title: $guildRulesChannelID
description: '$guildRulesChannelID вернет ID установленного канала для правил гильдии.'
id: guildRulesChannelID
---

`$guildRulesChannelID` вернет идентификатор установленного канала для правил гильдии.

## Использование

```php
$guildRulesChannelID[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет ID канала правил гильдии (только гильдии сообщества):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
