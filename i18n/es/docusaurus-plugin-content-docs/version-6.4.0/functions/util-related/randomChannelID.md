---
title: '$randomChannelID'
description: '$randomChannelID will return a random channel ID of all guilds or of a specific guild.'
id: randomChannelID
---

`$randomChannelID` will return a random channel ID of all guilds or of a specific guild.

## Uso

```php
$randomChannelID[guildID/global?;type?]
```

## Parámetros

| Campo           | Tipo   | Descripción                | Requerido |
| --------------- | ------ | -------------------------- |:---------:|
| guildID/global? | entero | Guild ID or global search. |   falso   |
| tipo?           | string | Channel type.              |   falso   |

<details open>
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

This will return a random channel ID of your guild:

```javascript
bot.command({
    name: 'randomChannelID',
    code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
