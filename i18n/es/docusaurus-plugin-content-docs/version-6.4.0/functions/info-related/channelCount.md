---
title: '$channelCount'
description: '$channelCount devolverá la cantidad de canales de un tipo determinado.'
id: channelCount
---

`$channelCount` devolverá la cantidad de canales de un tipo determinado.

## Modo de uso

```php
$channelCount[servidorID?;tipo?]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                               | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | ID del servidor desde el que se contarán los canales.                     |    no     |
| tipo?       | string | Tipo del que desea que se devuelva el importe, que figura a continuación. |    no     |

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
