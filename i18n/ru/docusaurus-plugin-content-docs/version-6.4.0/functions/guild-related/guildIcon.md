---
title: $guildIcon
description: '$guildIcon вернет значок гильдии.'
id: guildIcon
---

`$guildIcon` вернет значок гильдии.

## Использование

```php
$guildIcon[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет иконку гильдии:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
