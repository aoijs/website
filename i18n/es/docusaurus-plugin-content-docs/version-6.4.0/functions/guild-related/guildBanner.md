---
title: '$guildBanner'
description: '$guildBanner devolverá el estandarte del gremio de un gremio determinado.'
id: guildBanner
---

`$guildBanner` devolverá el estandarte del gremio de un gremio determinado.

## Uso

```php
$guildBanner[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá tu estandarte del gremio (si está desbloqueado y usando):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
