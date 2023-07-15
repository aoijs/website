---
title: '$vanityUses'
description: '$vanityUses will return the uses of a vanity URL.'
id: vanityUses
---

`$vanityUses` will return the uses of a vanity URL.

## Використання

```php
$vanityUses[guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the uses of your guild's vanity URL, if you have one:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
