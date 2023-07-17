---
title: '$hasPerms'
description: '$hasPerms comprobará si el usuario tiene uno de los permisos necesarios.'
id: hasPerms
---

`$hasPerms` comprobará si el usuario tiene uno de los permisos necesarios.

## Uso

```php
$hasPerms[servidoriD;usuarioID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                 | Requerido |
| ----------- | ------ | ----------------------------------------------------------- |:---------:|
| guildID     | entero | ID de la hermandad donde el cliente comprueba los permisos. | verdadero |
| usarioID    | entero | El ID del usuario.                                          |   falso   |
| ...permisos | string | Permisos.                                                   | verdadero |

<details>
  <summary> <h3> Permisos de la API de Discord </h3></summary>

| Permisos                |                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------- |
| createinvite            | Permiso para crear invitaciones de servidor                                      |
| kickmembers             | Permiso para expulsar a miembros del servidor                                    |
| banmembers              | Permiso para banear a miembros del servidor                                      |
| administrator           | Permisos de administrador                                                        |
| managechannels          | Permiso para gestionar canales de servidor                                       |
| manageguild             | Permisos para modificar los ajustes del servidor                                 |
| addreactions            | Permisos para añadir reacciones                                                  |
| viewauditlog            | Permiso para ver el registro de auditoría del servidor                           |
| priorityspeaker         | Prioridad de palabra                                                             |
| stream                  | Permiso para transmitir en canales de voz                                        |
| viewchannel             | Permiso para ver un canal determinado                                            |
| sendmessages            | Permiso para enviar mensajes en un canal determinado                             |
| sendttsmessages         | Permiso para enviar mensajes de texto a voz                                      |
| managemessages          | Permiso para gestionar mensajes                                                  |
| embedlinks              | Permiso para insertar enlaces                                                    |
| attachfiles             | Permiso para adjuntar archivos                                                   |
| readmessagehistory      | Permiso para leer el historial de mensajes dentro de un canal determinado        |
| mentioneveryone         | Permiso para mencionar @everyone/`@here` y todos los roles                       |
| useexternalemojis       | Permiso para utilizar emojis externos                                            |
| viewguildinsights       | Permiso para ver la información del servidor                                     |
| connect                 | Permiso para conectarse a canales de voz y stages                                |
| mutemembers             | Permiso para silenciar a los miembros en los canales de voz                      |
| deafenmembers           | Permiso para ensordecer a los miembros en los canales de voz                     |
| movemembers             | Permiso para mover miembros entre canales de voz                                 |
| usevad                  | Permiso para utilizar la detección de actividad vocal                            |
| changenickname          | Permiso para cambiar su propio apodo                                             |
| managenicknames         | Permiso para gestionar los apodos de otros miembros                              |
| manageroles             | Permiso para gestionar roles                                                     |
| managewebhooks          | Permiso para gestionar webhooks                                                  |
| manageemojisandstickers | Permiso para gestionar emojis y stickers                                         |
| useapplicationcommands  | Permiso para utilizar comandos de aplicación                                     |
| requesttospeak          | Permiso para utilizar la petición de palabra por stages                          |
| manageevents            | Permiso para gestionar eventos                                                   |
| managethreads           | Permiso para gestionar hilos                                                     |
| usepublicthreads        | Permiso para utilizar hilos públicos                                             |
| useprivatethreads       | Permiso para utilizar hilos privados                                             |
| createpublicthreads     | Permiso para crear hilos públicos                                                |
| createprivatethreads    | Permiso para crear hilos privados                                                |
| useexternalstickers     | Permiso para utilizar stickers extrernales                                       |
| sendmessagesinthreads   | Permiso para enviar mensajes en hilos                                            |
| useembeddedactivities   | Permiso para iniciar actividades en los canales de voz                           |
| moderatemembers         | Permiso para reducir y eliminar el tiempo de aislar de los miembros del servidor |

</details>

## Ejemplo(s)

Esto devolverá `true` cuando el autor tenga permisos de `kick` y devolverá `false` cuando no los tenga:

```javascript
bot.command({
    name: 'hasPerms',
    code: `
  $hasPerms[$guildID;$authorID;kick]
  `
});
```
