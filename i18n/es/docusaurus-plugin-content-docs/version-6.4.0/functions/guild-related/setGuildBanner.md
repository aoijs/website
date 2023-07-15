---
title: '$setGuildBanner'
description: '$setGuildBanner cambiará el estandarte de un Gremio.'
id: setGuildBanner
---

$setGuildBanner cambiará el estandarte de un Gremio.

## Uso

```php
$setGuildBanner[servidorID?;URL;razon?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                      | Requerido |
| ----------- | -------- | --------------------------------------------------------------- | --------- |
| servidorID? | entero   | ID del servidor.                                                | falso     |
| URL         | consulta | Nuevo estandarte del gremio.                                    | verdadero |
| ¿razón?     | string   | Razón que se mostrará en los registros de auditoría del gremio. | falso     |

## Ejemplo(s)

Esto cambiará el estandarte del gremio actual:

```javascript
bot.command({
    name: 'setGuildBanner',
    code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
