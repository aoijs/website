---
title: $guildSplash
description: '$guildSplash вернет фон приглашения гильдии (если разблокировано).'
id: guildSplash
---

`$guildSplash` вернет фон приглашения гильдии (если разблокирована).

## Использование

```php
$guildSplash[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет фон приглашения гильдии (если разблокировано):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
