---
title: '$guildNames'
description: '$guildNames will return the guide names your bot is in.'
id: guildNames
---

`$guildNames` will return the guide names your bot is in.

## Використання

```php
$guildNames[sep?]
```

## Параметри

| Поле | Тип   | Опис                                            | Обов'язковий |
| ---- | ----- | ----------------------------------------------- |:------------:|
| sep? | рядок | Separator to separate multiple returned values. |      ні      |

## Приклад(и)

This will return the names of the guilds your bot is in and separate it by a comma:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
