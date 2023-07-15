---
title: '$guildVanityURL'
description: '$guildVanityURL devolverá la URL de vanidad de un servidor.'
id: guildVanityURL
---

`$guildVanityURL` devolverá la URL de vanidad de un servidor.

## Modo de uso

```php
$guildVanityURL[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros       | Requerido |
| ----------- | ------- | ---------------- |:---------:|
| servidorID? | integer | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá la URL de vanidad de su servidor, si tiene una:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
