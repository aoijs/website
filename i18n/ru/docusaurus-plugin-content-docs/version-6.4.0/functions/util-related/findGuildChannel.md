---
title: $findGuildChannel
description: '$findGuildChannel будет искать канал гильдии в пределах гильдии.'
id: findGuildChannel
---

`$findGuildChannel` будет искать канал гильдии в пределах гильдии.

## Использование

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## Параметры

| Название        | Nbg     | Описание                                                                  | Нужно |
| --------------- | ------- | ------------------------------------------------------------------------- |:-----:|
| Резолвер канала | строка  | Название канала, который вы пытаетесь найти.                              |  да   |
| возврат самого? | boolean | Возвращает канал, в котором выполнялась команда, когда ничего не найдено. | false |
| ID гильдии?     | целое   | ID гильдии, в которой присутствует канал.                                 | false |

## Пример(ы)

ID канала будет возвращен через канал, называемый `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
