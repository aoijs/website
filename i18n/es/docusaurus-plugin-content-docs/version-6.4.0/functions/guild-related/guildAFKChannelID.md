---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID devolverá el canal de voz AFK de un gremio.'
id: guildAFKChannelID
---

`$guildAFKChannelID` devolverá el canal de voz de un gremio AFK

## Uso

```php
$guildAFKChannelID[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. | verdadera |

## Ejemplo(s)

Esto devolverá la cantidad de Canales de Voz en su servidor:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
