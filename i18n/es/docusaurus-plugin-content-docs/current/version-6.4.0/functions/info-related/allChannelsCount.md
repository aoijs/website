---
title: '$allChannelsCount'
description: '$allChannelsCount devolverá la cantidad de todos los canales almacenados en caché de un tipo determinado.'
id: allChannelsCount
---

`$allChannelsCount` devolverá la cantidad de todos los canales almacenados en caché de un tipo determinado.

## Modo de uso

```php
$allChannelsCount[tipo?]
```

## Parámetros

| Campo | Tipo   | Descripción                                     | Requerido |
| ----- | ------ | ----------------------------------------------- | --------- |
| tipo? | string | Tipo del que desea que se devuelva la cantidad. | no        |

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

Esto devolverá la cantidad de Canales de Voz en su servidor:

```javascript
bot.command({
    name: 'allChannelsCount',
    code: `
  $allChannelsCount[Voice]
  `
});
```
