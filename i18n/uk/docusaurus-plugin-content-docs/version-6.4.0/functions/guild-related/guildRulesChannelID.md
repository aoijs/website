---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID will return a guild''s set rules channel ID.'
id: guildRulesChannelID
---

`$guildRulesChannelID` will return a guild's set rules channel ID.

## Використання

```php
$guildRulesChannelID[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the ID of the guild's rules channel (community guilds only):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
