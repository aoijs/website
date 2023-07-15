---
title: '$guildFeatures'
description: '$guildFeatures retornará funciones de guild desbloqueadas.'
id: guildFeatures
---

`$guildFeatures` retornará características del gremio desbloqueadas.

## Uso

```php
$guildFeatures[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá las características desbloqueadas de un gremio:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
