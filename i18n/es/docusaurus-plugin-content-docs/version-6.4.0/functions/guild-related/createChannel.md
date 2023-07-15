---
title: '$createChannel'
description: '$createChannel creará un canal de un tipo determinado.'
id: createChannel
---

`$createChannel` devolverá todos los canales de una categoría determinada.

## Uso

```php
$createChannel[servidorID;nombre;tipo;ID de retorno;Identificación de los padres]
```

## Parámetros

| Campo         | Tipo     | Descripción                                                                                         | Requerido |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |:---------:|
| servidorID    | entero   | ID del servidor desde el que se contarán los canales.                                               | verdadero |
| name          | string   | El nombre del canal recién creado.                                                                  | verdadero |
| type          | string   | El tipo de canal. (listado abajo)                                                                   | verdadero |
| ID de retorno | booleano | El nombre del canal recién creado. <br /> 1. **true** <br /> 2. **false** (por defecto) | verdadero |
| parentID      | entero   | La categoría ID.                                                                                    |   falso   |

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

Esto creará un nuevo canal de texto llamado "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
