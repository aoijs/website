---
title: '$editChannel'
description: '$editChannel will edit a channel.'
id: editChannel
---

`$editChannel` will edit a channel.

## Modo de uso

```php
$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]
```

## Parámetros

| Campo                       | Tipo    | Descripción                                               | Requerido |
| --------------------------- | ------- | --------------------------------------------------------- |:---------:|
| canalID                     | entero  | The ID of the channel which will be notified.             |    sí     |
| name?                       | string  | The new channel name.                                     |    no     |
| tipo?                       | string  | The new channel type. (listed below)                      |    no     |
| position?                   | string  | The new channel position.                                 |    no     |
| topic?                      | cadena  | The new channel topic.                                    |   falso   |
| nsfw?                       | boolean | If it should mark the channel as NSFW or not.             |    no     |
| bitrate?                    | entero  | Voice Channel bitrate.                                    |    no     |
| userlimit?                  | número  | Voice Channel userlimit.                                  |   falso   |
| parent?                     | entero  | The new parent of the channel. (category ID)              |   falso   |
| lockPermissions?            | cadena  | The new channels lock permissions.                        |    no     |
| permissionOverwrites?       | string  | The new channels permission overwrites.                   |    no     |
| rateLimitPerUser?           | número  | The channel slowmode of the edited channel.               |    no     |
| defaultAutoArchiveDuration? | número  | Thread/Forum archive duration. (in ms)                    |    no     |
| rtcRegion?                  | cadena  | Voice Channel RTC region.                                 |    no     |
| ¿razón?                     | cadena  | Reason which will be displayed in the guild's audit logs. |    no     |

**Note: you can use `$default` to keep the current property.**

<details>
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

Note: all channel types are **case-sensitive**.

</details>

## Ejemplo(s)

This will change the current channel name to "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```