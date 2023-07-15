---
title: '$guildContentFilter'
description: '$guildContentFilter devolverá el recuento de potenciadores del gremio.'
id: guildContentFilter
---

`$guildContentFilter` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildContentFilter[servidorID?]
```

## Parámetros

| Campo       | Tipo   | Descripción       | Requerido |
| ----------- | ------ | ----------------- |:---------:|
| servidorID? | entero | La ID del gremio. | verdadero |

| Tipo |             |
| ---- | ----------- |
| 0    | Desactivado |
| 1    | Medio       |
| 2    | Alta        |

## Ejemplo(s)

Esto devolverá la cantidad de potenciadores que tiene un gremio específico:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
