---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID will return the ID of the guild''s system channel.'
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## Використання

```php
$guildSystemChannelID[guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the guild's system channel ID:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
