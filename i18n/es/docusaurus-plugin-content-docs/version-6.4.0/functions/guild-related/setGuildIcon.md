---
title: '$setGuildIcon'
description: '$setGuildIcon cambiará el estandarte de un Gremio.'
id: setGuildIcon
---

`$setGuildIcon` cambiará el ícono de un gremio.

## Uso

```php
$setGuildIcon[URL;servidorID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                | Requerido |
| ----------- | -------- | --------------------------------------------------------- |:---------:|
| URL         | consulta | URL del nuevo icono del gremio.                           | verdadero |
| servidorID? | entero   | El ID del gremio de dónde establecer el icono del gremio. |   falso   |

## Ejemplo(s)

Esto cambiará el ícono del gremio en el que ejecutas el comando a tu avatar de usuario:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```