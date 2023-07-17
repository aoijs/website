---
title: $guildNSFWLevel
description: '$guildNSFWLevel вернет уровень NSFW гильдии.'
id: guildNSFWLevel
---

`$guildNSFWLevel` вернет уровень NSFW гильдии.

## Использование

```php
$guildNSFWLevel[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. |  да   |

## Пример(ы)

Уровень NSFW для гильдии:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
