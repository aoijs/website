---
title: $guildPreferredLocale
description: '$guildPreferredLocale вернёт установленную локаль гильдии.'
id: guildPreferredLocale
---

`$guildPreferredLocale` вернет установленную локаль гильдии.

## Использование

```php
$guildPreferredLocale[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет выбранную гильдию:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
