---
title: $guildFeatures
description: '$guildFeatures вернет разблокированные функции гильдии.'
id: guildFeatures
---

`$guildFeatures` вернет разблокированные функции гильдии.

## Использование

```php
$guildFeatures[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет функции разблокированной гильдии из гильдии:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
