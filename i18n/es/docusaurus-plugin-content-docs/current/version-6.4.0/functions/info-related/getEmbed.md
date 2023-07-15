---
title: '$getEmbed'
description: '$getEmbed will return properties about an given embed.'
id: getEmbed
---

`$getEmbed` will return properties about an given embed.

## Modo de uso

```php
$getEmbed[channelID?;messageID?;index?;option?]
```

## Parámetros

| Campo         | Tipo   | Descripción                                        | Requerido |
| ------------- | ------ | -------------------------------------------------- |:---------:|
| canalID       | entero | ID of the channel where the message is located in. |    sí     |
| ID de mensaje | entero | The ID of the message that has an embed.           |    sí     |
| índice        | entero | The index of the embed.                            |    sí     |
| opción        | cadena | The option to fetch.                               |    sí     |

<details>
  <summary><h3> Options </h3></summary>

| Tipo                                | Descripción                      |
| ----------------------------------- | -------------------------------- |
| title                               | Title of the embed.              |
| description                         | Description of the embed.        |
| URL                                 | The URL in the title.            |
| color                               | Color of the embed.              |
| timestamp                           | Timestamp located in the footer. |
| field<index\>.name / field1.name   | Field title.                     |
| field<index\>.value / field1.value | Field description.               |
| thumbnail                           | Thumbnail (image top right).     |
| image                               | Large image at the bottom.       |
| video                               | Video/GIF.                       |
| author                              | Author, above title field.       |
| footer                              | Footer.                          |
| files                               | Attached files.                  |
| createdAt                           | Creation date of the embed.      |
| hexColor                            | Hex color of the embed.          |
| length                              | Length of the embed.             |

</details>

## Ejemplo(s)

This will return the description of an embed:

```javascript
bot.command({
    name: 'getEmbed',
    code: `
$getEmbed[$channelID;messageID;1;description] 
  ` // make sure to replace messageID with the actual message ID 
});
```
