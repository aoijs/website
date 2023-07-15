---
title: '$guildIDS'
description: '$guildIDS will return the ID of every guild your bot is in.'
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## Використання

```php
$guildIDS[sep?]
```

## Параметри

| Поле | Тип   | Опис                                                | Обов'язковий |
| ---- | ----- | --------------------------------------------------- |:------------:|
| sep? | рядок | The separator to separate multiple returned values. |      ні      |

## Приклад(и)

This will return all guild IDs your bot is in:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
