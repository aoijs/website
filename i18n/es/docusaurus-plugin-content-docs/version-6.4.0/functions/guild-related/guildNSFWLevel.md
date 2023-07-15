---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel devolverá el recuento de potenciadores del gremio.'
id: guildNSFWLevel
---

`$guildNSFWLevel` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildNSFWLevel[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. | verdadera |

## Ejemplo(s)

Esto devolverá el nivel NSFW del gremio:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
