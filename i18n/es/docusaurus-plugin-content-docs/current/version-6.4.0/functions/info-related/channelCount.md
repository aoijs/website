---
title: '$channelCount'
description: '$channelCount will return the amount of channels of a given type.'
id: channelCount
---

`$channelCount` will return the amount of channels of a given type.

## Modo de uso

```php
$channelCount[guildID?;type?]
```

## Parámetros

| Campo       | Tipo   | Descripción                                               | Requerido |
| ----------- | ------ | --------------------------------------------------------- |:---------:|
| servidorID? | entero | ID of the guild where the channels will be counted from.  |    no     |
| tipo?       | string | Type you want the amount of to be returned, listed below. |    no     |

<details>
  <summary>Tipos de canales</summary>

| Tipo de canal            |                    |
| ------------------------ | ------------------ |
| Canal de texto           | Text               |
| Canal de voz             | Voice              |
| Categoría                | Category           |
| Canal de escenario       | Stage              |
| Hilo privado             | PrivateThread      |
| Hilo público             | PublicThread       |
| Forum                    | Forum              |
| Hilo de anuncio          | AnnouncementThread |
| Canal de anuncio         | Announcement       |
| Home                     | GuildDirectory     |
| Canal NSFW               | NSFW               |
| Mensaje directo          | DM                 |
| Todos los tipos de canal | all                |

</details>

## Ejemplo(s)

Esto devolverá la cantidad de Canales de Voz en su servidor:

```javascript
bot.command({
    name: 'channelCount',
    code: `
  $channelCount[$guildID;Voice]
  `
});
```
