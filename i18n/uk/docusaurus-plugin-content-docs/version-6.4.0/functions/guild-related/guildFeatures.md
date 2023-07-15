---
title: '$guildFeatures'
description: '$guildFeatures will return unlocked guild features.'
id: guildFeatures
---

`$guildFeatures` will return unlocked guild features.

## Використання

```php
$guildFeatures[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the unlocked guild features of a guild:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
