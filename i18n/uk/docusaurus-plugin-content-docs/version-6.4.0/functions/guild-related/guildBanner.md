---
title: '$guildBanner'
description: '$guildBanner will return the guild banner of a given guild.'
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## Використання

```php
$guildBanner[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
