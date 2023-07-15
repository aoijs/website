---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID will return the ID of the guild''s system channel.'
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## Modo de uso

```php
$guildSystemChannelID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros    | Requerido |
| ----------- | ------- | ------------- |:---------:|
| servidorID? | integer | The guild ID. |    no     |

## Ejemplo(s)

This will return the guild's system channel ID:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
