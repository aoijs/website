---
title: '$setGuildBanner'
description: '$setGuildBanner will change a Guild''s banner.'
id: setGuildBanner
---

`$setGuildBanner` will change a Guild's banner.

## Modo de uso

```php
$setGuildBanner[guildID?;URL;reason?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                      | Requerido |
| ----------- | -------- | --------------------------------------------------------------- | --------- |
| servidorID? | entero   | Guild ID of the guild.                                          | no        |
| URL         | consulta | New guild banner.                                               | verdadero |
| ¿razón?     | string   | Razón que se mostrará en los registros de auditoría del gremio. | falso     |

## Ejemplo(s)

This will change the banner of the current guild:

```javascript
bot.command({
    name: 'setGuildBanner',
    code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
