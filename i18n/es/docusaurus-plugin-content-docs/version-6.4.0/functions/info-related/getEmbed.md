---
title: '$getEmbed'
description: '$getEmbed devolverá propiedades sobre un embed dado.'
id: getEmbed
---

`$getEmbed` devolverá propiedades sobre un embed dado.

## Modo de uso

```php
$getEmbed[canalID?;mensajeID?;índice?;opción?]
```

## Parámetros

| Campo         | Tipo   | Descripción                                     | Requerido |
| ------------- | ------ | ----------------------------------------------- |:---------:|
| canalID       | entero | ID del canal en el que se encuentra el mensaje. |    sí     |
| ID de mensaje | entero | El ID del mensaje que tiene un embed.           |    sí     |
| índice        | entero | El índice del embed.                            |    sí     |
| opción        | cadena | La opción a recuperar.                          |    sí     |

<details>
  <summary><h3> Opciones </h3></summary>

| Tipo                                | Descripción                               |
| ----------------------------------- | ----------------------------------------- |
| title                               | Título del embed.                         |
| description                         | Descripción del embed.                    |
| URL                                 | La URL del título.                        |
| color                               | Color del embed.                          |
| timestamp                           | Timestamp situado en el footer del embed. |
| field<index\>.name / field1.name   | Titulo del campo.                         |
| field<index\>.value / field1.value | Descripción del campo.                    |
| thumbnail                           | Miniatura (imagen superior derecha).      |
| image                               | Imagen grande en la parte inferior.       |
| video                               | Vídeo/GIF.                                |
| author                              | Autor, encima del campo del título.       |
| footer                              | Footer.                                   |
| files                               | Archivos adjuntos.                        |
| createdAt                           | Fecha de creación del embed.              |
| hexColor                            | Color hexadecimal del embed.              |
| length                              | Longitud del embed.                       |

</details>

## Ejemplo(s)

Esto devolverá la descripción de un embed:

```javascript
bot.command({
    name: 'getEmbed',
    code: `
$getEmbed[$channelID;messageID;1;description] 
  ` // asegúrese de sustituir messageID por el ID real del mensaje 
});
```
