---
title: '$randomChannelID'
description: '$randomChannelID devolverá un ID de canal aleatorio de todos los gremios o de un gremio específico.'
id: randomChannelID
---

`$randomChannelID` devolverá un ID de canal aleatorio de todos los gremios o de un gremio específico.

## Uso

```php
$randomChannelID[guildID/global?;type?]
```

## Parámetros

| Campo            | Tipo   | Descripción                      | Requerido |
| ---------------- | ------ | -------------------------------- |:---------:|
| ¿guildID/global? | entero | ID del gremio o búsqueda global. |   falso   |
| tipo?            | string | Tipo de canal.                   |   falso   |

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

Esto devolverá un ID de canal aleatorio de tu gremio:

```javascript
bot.command({
    name: 'randomChannelID',
    code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
