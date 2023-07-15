---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale devolverá el nombre del servidor.'
id: guildPreferredLocale
---

`$guildPreferredLocale` devolverá la configuración regional establecida de un gremio.

## Modo de uso

```php
$guildPreferredLocale[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá la configuración regional preferida del gremio:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
