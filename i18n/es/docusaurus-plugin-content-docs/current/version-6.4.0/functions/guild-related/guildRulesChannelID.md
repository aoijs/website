---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID will return a guild''s set rules channel ID.'
id: guildRulesChannelID
---

`$guildRulesChannelID` will return a guild's set rules channel ID.

## Modo de uso

```php
$guildRulesChannelID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the ID of the guild's rules channel (community guilds only):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
