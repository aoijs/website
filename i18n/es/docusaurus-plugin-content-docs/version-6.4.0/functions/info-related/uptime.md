---
title: '$uptime'
description: '$uptime devolverá el tiempo de actividad del bot.'
id: uptime
---

`$uptime` devolverá el tiempo de actividad del bot.

## Uso

```php
$uptime[opción?]
```

## Parámetros

| Campo   | Tipo   | Descripción                                                          | Requerido |
| ------- | ------ | -------------------------------------------------------------------- |:---------:|
| opción? | cadena | Cómo se devolverá el tiempo de actividad (se indica a continuación). |    no     |

| Opción                 | Salida                 |
| ---------------------- | ---------------------- |
| full **(por defecto)** | 19 minutes, 21 seconds |
| humanize               | 19m 21s                |
| ms                     | 1165980                |

## Ejemplo(s)

Esto devolverá el tiempo de conexión de su bot:

```javascript
bot.command({
    name: 'uptime',
    code: `
¡Hace $uptime[full] que estoy despierto!
  `
});
```
