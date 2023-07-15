---
title: '$guildChannelExists'
description: '$guildChannelExists comprobará si existe un canal de guild determinado.'
id: guildChannelExists
---

`$guildChannelExists` comprobará si existe un canal de gremio.

## Uso

```php
$guildChannelExists[servidorID;canalResolver]
```

## Parámetros

| Campo         | Tipo           | Parámetros                                                    | Requerido |
| ------------- | -------------- | ------------------------------------------------------------- |:---------:|
| servidorID    | entero         | ID de la hermandad en la que existe el canal de la hermandad. | verdadero |
| canalResolver | entero, cadena | ID de canal o nombre del canal.                               | verdadero |

## Ejemplo(s)

Esto comprobará si existe un canal de gremio con el nombre `reglas` , alternativamente puedes usar el ID del canal en su lugar:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
