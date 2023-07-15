---
title: '$oldChannel'
description: '$oldChannel contiene datos del canal antes de que se actualizara, se usaron en el evento de actualización del canal o, de lo contrario, cualquier dato estará vacío'
id: oldChannel
---

`$oldChannel` contiene datos del canal antes de que se actualizara, se usaron en el evento de actualización del canal o, de lo contrario, cualquier dato estará vacío

## Uso

```php
$oldChannel[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción         | Requerido |
| ------ | ------ | ------------------- |:---------:|
| opción | cadena | Opción a recuperar. | verdadero |

### Opciones

| Campo                      | Tipo   | Descripción                                                                |
| -------------------------- | ------ | -------------------------------------------------------------------------- |
| name                       | cadena | Devuelve el nombre del canal.                                              |
| id                         | entero | Devuelve el ID del canal.                                                  |
| createdAt                  | entero | Devuelve la fecha de cuando fue creado el canal.                           |
| createdTimestamp           | entero | Devuelve la fecha de cuando fue creado el canal.                           |
| defaultAutoArchiveDuration | entero | Devuelve la duración del archivo por defecto.                              |
| deleteable                 | cadena | Devuelve true / false si el canal es eliminable.                           |
| deleted                    | cadena | Devuelve true / false si el canal es eliminable.                           |
| guildID                    | entero | Devuelve el ID del gremio actual.                                          |
| lastMessageContent         | cadena | Devuelve el contenido del último mensaje enviado en el canal.              |
| lastMessageID              | entero | Devuelve el ID del último mensaje enviado en el canal.                     |
| lastPinAt                  | entero | Devuelve la fecha del último mensaje fijado.                               |
| lastPinTimestamp           | entero | Devuelve la marca de tiempo del último mensaje fijado.                     |
| manageable                 | cadena | Devuelve true / false si el canal es manejable.                            |
| nsfw                       | cadena | Devuelve true / false si el canal es NSFW.                                 |
| parentName                 | cadena | Devuelve Nombre de Categoría.                                              |
| parentID                   | entero | Devuelve la Categoría ID.                                                  |
| position                   | entero | Devuelve la posición del canal.                                            |
| slowmode                   | entero | Devuelve el modo lento del canal. (si hay alguna)                          |
| topic                      | cadena | Devuelve el tema del canal.                                                |
| type                       | cadena | Devuelve el tipo de canal.                                                 |
| viewable                   | cadena | Devuelve verdadero / falso si el canal es visible.                         |
| permsAllowed               | cadena | Devuelve permisos permitidos para el canal actual.                         |
| permsDenied                | cadena | Devuelve permisos denegados para el canal actual.                          |
| perms                      | cadena | Devuelve permisos para el canal actual.                                    |
| joinable                   | cadena | Devuelve true / false si el canal se puede unir (sólo si su canal de voz). |
| userLimit                  | entero | Devuelve el límite de usuario para el canal actual (voz).                  |
| messageCount               | entero | Devuelve el conteo de mensajes enviados en el canal actual.                |

## Ejemplo(s)
```js
bot.channelCreateCommand({
    channel: "channelid",
    code: `
¡Se ha creado un nuevo canal!
- Nombre: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`
})
```
- Este código se ejecutará cuando se cree __canal__.
---
```js
bot.channelDeleteCommand({
    channel: "channelid",
    code: `
¡El canal ha sido eliminado!
- Nombre: $oldChannel[name]
- ID: $oldChannel[id]`
})
```
- Este código se ejecutará cuando se elimine __canal__.
---
```js
bot.channelUpdateCommand({
    channel: "channelid",
    code: `
¡El canal ha sido actualizado!

- Nuevo nombre: $newChannel[name]
 - Viejo nombre: $oldChannel[name]`
})
```
- Este código se ejecutará cuando __el canal se actualice__.
---