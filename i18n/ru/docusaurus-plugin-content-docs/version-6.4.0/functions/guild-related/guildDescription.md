---
title: $guildDescription
description: '$guildDescription вернет описание гильдии.'
id: guildDescription
---

`$guildDescription` вернет описание гильдии.

## Использование

```php
$guildDescription[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернёт описание конкретной гильдии:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
