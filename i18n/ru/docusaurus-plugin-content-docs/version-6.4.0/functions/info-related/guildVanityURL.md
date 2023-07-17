---
title: $guildVanityURL
description: '$guildVanityURL возвращает персональный URL гильдии.'
id: guildVanityURL
---

`$guildVanityURL` вернет персональный URL гильдии.

## Использование

```php
$guildVanityURL[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет персональный URL гильдии, если таковой имеется:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
