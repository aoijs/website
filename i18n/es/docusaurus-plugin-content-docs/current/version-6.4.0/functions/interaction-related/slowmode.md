---
title: '$slowmode'
description: '$slowmode will change a channel''s slowmode.'
id: slowmode
---

`$slowmode` will change a channel's slowmode.

## Modo de uso

```php
$slowmode[time;channelID?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                                   | Requerido |
| -------- | -------------- | -------------------------------------------- |:---------:|
| tiempo   | cadena, número | The new slowmode of the given channel.       | verdadero |
| canalID? | entero         | The ID of the channel that will be modified. |    no     |

This has a max time of 21600000 seconds (6 hours).

## Ejemplo(s)

This will change the channel's slowmode to three minutes:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[3m;$channelID]`
});
```

This will change the channel's slowmode to 6 hours:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[6h;$channelID]`
});
```