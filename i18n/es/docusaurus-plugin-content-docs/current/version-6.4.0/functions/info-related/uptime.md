---
title: '$uptime'
description: '$uptime will return the bot''s uptime.'
id: uptime
---

`$uptime` will return the bot's uptime.

## Modo de uso

```php
$uptime[option?]
```

## Parámetros

| Campo   | Tipo   | Descripción                                     | Requerido |
| ------- | ------ | ----------------------------------------------- |:---------:|
| opción? | cadena | How the uptime will be returned (listed below). |    no     |

| Opción             | Output                 |
| ------------------ | ---------------------- |
| full **(default)** | 19 minutes, 21 seconds |
| humanize           | 19m 21s                |
| ms                 | 1165980                |

## Ejemplo(s)

This will return the time of how long your bot is online for:

```javascript
bot.command({
    name: 'uptime',
    code: `
  I've been up for $uptime[full]!
  `
});
```
