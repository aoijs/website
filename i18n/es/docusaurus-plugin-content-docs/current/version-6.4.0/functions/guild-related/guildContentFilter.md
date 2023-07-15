---
title: '$guildContentFilter'
description: '$guildContentFilter will return the guild''s content filter level.'
id: guildContentFilter
---

`$guildContentFilter` will return the guild's content filter level.

## Modo de uso

```php
$guildContentFilter[guildID?]
```

## Parámetros

| Campo       | Tipo   | Descripción          | Requerido |
| ----------- | ------ | -------------------- |:---------:|
| servidorID? | entero | The ID of the guild. | verdadero |

| Tipo |          |
| ---- | -------- |
| 0    | Disabled |
| 1    | Medium   |
| 2    | High     |

## Ejemplo(s)

This will return the content filter level of a specific guild:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
