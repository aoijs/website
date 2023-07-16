---
title: '$channelExists'
description: '$channelExists comprobará si existe un canal de gremio.'
id: channelExists
---

`$channelExists` comprobará si existe un canal de gremio.

## Uso

```php
$channelExists[canal]
```

## Parámetros

| Campo | Tipo           | Parámetros                       | Requerido |
| ----- | -------------- | -------------------------------- |:---------:|
| canal | cadena, número | ID del canal o nombre del canal. | verdadera |

## Ejemplo(s)

Esto comprobará si existe un canal de gremio con el nombre `general` , alternativamente puedes usar el ID del canal en su lugar:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
