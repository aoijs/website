---
title: '$createChannel'
description: '$createChannel will create a channel of a given type.'
id: createChannel
---

`$createChannel` will create a channel of a given type.

## Modo de uso

```php
$createChannel[guildID;name;type;returnID;parentID]
```

## Parámetros

| Campo      | Tipo    | Descripción                                                                                                          | Requerido |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID | entero  | ID of the guild of where the channel will be created in.                                                             |    sí     |
| name       | string  | The channel name of the newly created channel.                                                                       |    sí     |
| type       | string  | The channel type. (listed below)                                                                                     |    sí     |
| returnID   | boolean | Return the channel ID of the newly created channel. <br /> 1. **true** <br /> 2. **false** (por defecto) |    sí     |
| parentID   | entero  | The category ID.                                                                                                     |   falso   |

<details open>
  <summary>Tipos de canales</summary>

| Tipo de canal      |                    |
| ------------------ | ------------------ |
| Canal de texto     | Text               |
| Canal de voz       | Voice              |
| Categoría          | Category           |
| Canal de escenario | Stage              |
| Hilo privado       | PrivateThread      |
| Hilo público       | PublicThread       |
| Forum              | Forum              |
| Hilo de anuncio    | AnnouncementThread |
| Canal de anuncio   | Announcement       |

</details>

## Ejemplo(s)

This will create a new text channel called "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
