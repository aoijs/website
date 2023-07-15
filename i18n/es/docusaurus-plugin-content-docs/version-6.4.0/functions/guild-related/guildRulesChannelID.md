---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID devolverá el ID de las reglas establecidas por un gremio.'
id: guildRulesChannelID
---

`$guildRulesChannelID` devolverá el ID del canal de reglas establecido de un gremio.

## Uso

```php
$guildRulesChannelID[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá el ID del canal de reglas del gremio (sólo gremios de la comunidad):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
