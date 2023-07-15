---
title: '$guildAvailable'
description: '$guildAvailable volverá si el gremio dado está disponible en Discord.'
id: guildAvailable
---

`$guildAvailable` volverá si el gremio dado está disponible en Discord.

## Uso

```php
$guildAvailable[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá `true` o `false` dependiendo de si el gremio está disponible:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
