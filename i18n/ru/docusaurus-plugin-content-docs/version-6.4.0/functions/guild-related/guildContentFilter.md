---
title: $guildContentFilter
description: '$guildContentFilter вернет уровень фильтра содержимого гильдии.'
id: guildContentFilter
---

`$guildContentFilter` вернет уровень фильтра содержимого гильдии.

## Использование

```php
$guildContentFilter[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. |  да   |

| Nbg |           |
| --- | --------- |
| 0   | Отключено |
| 1   | Средний   |
| 2   | Высокий   |

## Пример(ы)

Это вернет уровень фильтра содержимого конкретной гильдии:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
