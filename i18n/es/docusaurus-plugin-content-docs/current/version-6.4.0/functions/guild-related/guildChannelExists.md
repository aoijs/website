---
title: '$guildChannelExists'
description: '$guildChannelExists will check if a given guild channel exists.'
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## Modo de uso

```php
$guildChannelExists[guildID;channelResolver]
```

## Parámetros

| Campo           | Tipo            | Parámetros                                         | Requerido |
| --------------- | --------------- | -------------------------------------------------- |:---------:|
| servidorID      | entero          | ID of the guild where the guild channel exists in. | verdadero |
| channelResolver | integer, string | Channel ID or name of the channel.                 | verdadero |

## Ejemplo(s)

This will check if a guild channel with the name `rules` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
