---
title: '$hasAnyPerm'
description: '$hasAnyPerm will check if the user has one of the required permissions.'
id: hasAnyPerm
---

`$hasAnyPerm` will check if the user has one of the required permissions.

## Modo de uso

```php
$hasAnyPerm[guildID;userID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                              | Requerido |
| ----------- | ------ | -------------------------------------------------------- |:---------:|
| servidorID  | entero | ID of the guild where the client checks the permissions. |    sí     |
| usarioID    | entero | ID of the user.                                          |   falso   |
| ...permisos | cadena | Permissions.                                             |    sí     |

<details>
  <summary> <h3> Permisos de la API de Discord </h3></summary>

| Permisos                |                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------- |
| createinvite            | Permiso para crear invitaciones de servidor                                      |
| kick                    | Permiso para expulsar a miembros del servidor                                    |
| ban                     | Permiso para banear a miembros del servidor                                      |
| administrator           | Permisos de administrador                                                        |
| managechannel           | Permiso para gestionar canales de servidor                                       |
| manageguild             | Permisos para modificar los ajustes del servidor                                 |
| addreactions            | Permisos para añadir reacciones                                                  |
| viewauditlog            | Permiso para ver el registro de auditoría del servidor                           |
| priorityspeaker         | Prioridad de palabra                                                             |
| stream                  | Permiso para transmitir en canales de voz                                        |
| viewchannel             | Permiso para ver un canal determinado                                            |
| sendmessages            | Permiso para enviar mensajes en un canal determinado                             |
| sendtts                 | Permiso para enviar mensajes de texto a voz                                      |
| managemessages          | Permiso para gestionar mensajes                                                  |
| embedlinks              | Permiso para insertar enlaces                                                    |
| attachfiles             | Permiso para adjuntar archivos                                                   |
| readmessagehistory      | Permiso para leer el historial de mensajes dentro de un canal determinado        |
| mentioneveryone         | Permission to mention `@everyone` and all roles                                  |
| externalemojis          | Permiso para utilizar emojis externos                                            |
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
| useappcmds              | Permiso para utilizar comandos de aplicación                                     |
| requesttospeak          | Permiso para utilizar la petición de palabra por stages                          |
| manageevents            | Permiso para gestionar eventos                                                   |
| managethreads           | Permiso para gestionar hilos                                                     |
| usepublicthreads        | Permiso para utilizar hilos públicos                                             |
| useprivatethreads       | Permiso para utilizar hilos privados                                             |
| createpublicthreads     | Permiso para crear hilos públicos                                                |
| createprivatethreads    | Permiso para crear hilos privados                                                |
| externalstickers        | Permiso para utilizar stickers extrernales                                       |
| sendmessageinthreads    | Permiso para enviar mensajes en hilos                                            |
| startembeddedactivities | Permiso para iniciar actividades en los canales de voz                           |
| moderatemembers         | Permiso para reducir y eliminar el tiempo de aislar de los miembros del servidor |

</details>

## Ejemplo(s)

This will return `true` when the author has `manage messages` or `kick` permissions and return `false` when they don't have any of those:

```javascript
bot.command({
    name: 'hasAnyPerm',
    code: `
  $hasAnyPerm[$guildID;$authorID;kick;managemessages]
  `
});
```

