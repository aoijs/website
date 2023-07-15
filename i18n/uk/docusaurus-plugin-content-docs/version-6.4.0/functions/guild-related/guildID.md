---
title: '$guildID'
description: '$guildID will return the guild ID of a given guild.'
id: guildID
---

`$guildID` will return the guild ID of a given guild.

## Використання

```php
$guildID[name?]
```

## Параметри

| Поле  | Тип   | Опис                                              | Обов'язковий |
| ----- | ----- | ------------------------------------------------- |:------------:|
| name? | рядок | The guild name you want the ID to be returned of. |      ні      |

## Приклад(и)

This will return your guild ID:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
