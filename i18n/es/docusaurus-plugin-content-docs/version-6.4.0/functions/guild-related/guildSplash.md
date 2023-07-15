---
title: '$guildSplash'
description: '$guildSplash devolverá el fondo de invitación de un gremio (si se desbloquea).'
id: guildSplash
---

`$guildSplash` devolverá el fondo de invitación de un gremio (si se desbloquea).

## Uso

```php
$guildSplash[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá el fondo de invitación del gremio (si está desbloqueado):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
