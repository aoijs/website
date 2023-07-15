---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode will return a channel''s slowmode in seconds.'
id: getChannelSlowmode
---

`$getChannelSlowmode` will return a channel's slowmode in seconds.

## Modo de uso

```php
$getChannelSlowmode[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                               | Requerido |
| -------- | ------- | ------------------------------------------------------------------------ |:---------:|
| canalID? | integer | ID of the channel where you want the channel slowmode to be returned of. |    no     |

## Ejemplo(s)

This will return the slowmode of the channel where you execute the command in:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  The current channel slowmode is: $getChannelSlowmode[$channelID] seconds!
  `
});
```