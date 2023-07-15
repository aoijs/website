---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID will return a guild''s AFK voice channel.'
id: guildAFKChannelID
---

`$guildAFKChannelID` will return a guild's AFK voice channel

## Modo de uso

```php
$guildAFKChannelID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. | verdadera |

## Ejemplo(s)

This will return the AFK voice channel of your guild:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
