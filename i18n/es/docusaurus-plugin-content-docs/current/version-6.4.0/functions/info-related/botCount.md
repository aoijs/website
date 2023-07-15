---
title: '$guildBotCount'
description: '$guildBotCount will return the amount of Bots in your guild.'
id: guildBotCount
---

`$guildBotCount` will return the amount of Bots in your guild.

## Modo de uso

```php
$guildBotCount[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                     | Requerido |
| ----------- | ------- | -------------------------------------------------------------- |:---------:|
| servidorID? | integer | Guild ID of the guild you want to retrieve the amount of bots. |    no     |

## Ejemplo(s)

This will return the amount of bots in your guild:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```