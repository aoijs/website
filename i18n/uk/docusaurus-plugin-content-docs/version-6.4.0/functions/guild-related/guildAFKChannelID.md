---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID will return a guild''s AFK voice channel.'
id: guildAFKChannelID
---

`$guildAFKChannelID` will return a guild's AFK voice channel

## Використання

```php
$guildAFKChannelID[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |     так      |

## Приклад(и)

This will return the AFK voice channel of your guild:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
