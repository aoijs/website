---
title: '$findGuildChannel'
description: '$findGuildChannel will search a guild channel within a guild.'
id: findGuildChannel
---

`$findGuildChannel` will search a guild channel within a guild.

## Modo de uso

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                               | Requerido |
| --------------- | -------- | ------------------------------------------------------------------------ |:---------:|
| channelResolver | consulta | Name of the channel you are trying to find.                              | verdadero |
| returnSelf?     | boolean  | Return the channel where the command got executed in when nothing found. |    no     |
| servidorID?     | entero   | ID of the guild where the channel is present in.                         |   falso   |

## Ejemplo(s)

This will return the channel ID of an channel called `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
