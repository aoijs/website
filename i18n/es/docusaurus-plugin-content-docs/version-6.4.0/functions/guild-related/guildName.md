---
title: '$guildName'
description: '$guildName devolverá la descripción del gremio.'
id: guildName
---

`$guildName` devolverá el nombre del servidor.

## Uso

```php
$guildName[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |   falso   |

## Ejemplo(s)

Esto devolverá el nombre de tu gremio:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
