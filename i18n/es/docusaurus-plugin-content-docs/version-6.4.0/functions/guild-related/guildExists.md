---
title: '$guildExists'
description: '$guildExists comprobará si existe un canal de gremio.'
id: guildExists
---

`$guildExists` comprobará si existe un canal de gremio.

## Uso

```php
$guildExists[servidorID]
```

## Parámetros

| Campo      | Tipo    | Parámetros     | Requerido |
| ---------- | ------- | -------------- |:---------:|
| servidorID | integer | ID del gremio. | verdadera |

## Ejemplo(s)

Esto devolverá `true` tu gremio existe:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```