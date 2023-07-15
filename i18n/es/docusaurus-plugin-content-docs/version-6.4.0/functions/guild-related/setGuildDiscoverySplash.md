---
title: '$setGuildDiscoverySplash'
description: '$setGuildDiscoverySplash cambiará el estandarte de bienvenida de un gremio.'
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` cambiará el estandarte de bienvenida de un Gremio.

## Uso

```php
$setGuildDiscoverySplash[servidorID?;URL;razon?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                      | Requerido |
| ----------- | -------- | --------------------------------------------------------------- | --------- |
| servidorID? | entero   | ID del servidor.                                                | falso     |
| URL         | consulta | Nuevo banner de salpicadura de descubrimiento.                  | verdadero |
| ¿razón?     | string   | Razón que se mostrará en los registros de auditoría del gremio. | falso     |

## Ejemplo(s)

Esto cambiará el estandarte del gremio actual:

```javascript
bot.command({
    name: 'setGuildDiscoverySplash',
    code: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```