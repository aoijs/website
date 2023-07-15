---
title: '$isPartnered'
description: '$isPartnered checks if the given guild is partnered with Discord.'
id: isPartnered
---

`$isPartnered` checks if the given guild is partnered with Discord.

## Використання

```php
$isPartnered[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                             | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild you want to check its partnership status of. |     так      |

## Приклад(и)

This will check if your server is partnered and return either `true` or `false`:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
