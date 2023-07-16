---
title: '$getAuditLogs'
description: '$getAuditLogs recuperará los registros de auditoría del servidor de acuerdo con los argumentos dados.'
id: getAuditLogs
---

`$getAuditLogs` recuperará los registros de auditoría del servidor de acuerdo con los argumentos dados.

## Uso

```php
$getAuditLogs[servidorID;usarioID?;límite?;acción?;formato?]
```

## Parámetros

| Campo      | Tipo   | Descripción                                                              | Requerido |
| ---------- | ------ | ------------------------------------------------------------------------ |:---------:|
| servidorID | entero | El ID de un servidor específico.                                         |    sí     |
| usarioID?  | entero | El usuario que ejecutó la acción indicada en los registros de auditoría. |    no     |
| límite?    | número | El máximo de registros de auditoría que devolverá.                       |    no     |
| acción?    | entero | La acción que se ha ejecutado.                                           |    no     |
| formato?   | string | El formato para devolver los registros de auditoría.                     |    no     |

| Formato             |                                                                       |
| ------------------- | --------------------------------------------------------------------- |
| {executor.username} | Devolverá el nombre de usuario del usuario que ha ejecutado la acción |
| {executor.mention}  | Mencionará el usuario que ejecutó la acción                           |
| {executor.id}       | Devolverá el ID del usuario que ejecutó la acción                     |
| {executor.tag}      | Devolverá el discriminador del usuario que ejecutó la acción          |
| {target.id}         | Devolverá el ID del usuario que era el objetivo de la acción          |
| {action}            | Devolverá la propia acción                                            |
| {id}                | Devuelve el ID de la acción/registro de auditoría                     |

## Eventos del registro de auditoría

| EVENTO                                  | VALOR | DESCRIPCIÓN                                                                              |           OBJETO CAMBIADO            |
| --------------------------------------- |:-----:| ---------------------------------------------------------------------------------------- |:------------------------------------:|
| GuildUpdate                             |   1   | Se han actualizado los ajustes del servidor                                              |               Servidor               |
| ChannelCreate                           |  10   | Se creó el canal                                                                         |                Canal                 |
| ChannelUpdate                           |  11   | Se han actualizado los ajustes de los canales                                            |                Canal                 |
| ChannelDelete                           |  12   | Canal eliminado                                                                          |                Canal                 |
| ChannelOverwriteCreate                  |  13   | Se ha añadido un permiso de sobrescritura a un canal                                     |         Canal sobrescritura          |
| ChannelOverwriteUpdate                  |  14   | Se ha actualizado la sobreescritura de permisos para un canal                            |         Canal sobrescritura          |
| ChannelOverwriteDelete                  |  15   | Se ha eliminado el permiso de sobrescritura de un canal                                  |         Canal sobrescritura          |
| MemberKick                              |  20   | Se ha expulsado un miembro del servidor                                                  |                                      |
| MemberPrune                             |  21   | Se suprimieron miembros del servidor                                                     |                                      |
| MemberBanAdd                            |  22   | Miembro baneado del servidor                                                             |                                      |
| MemberBanRemove                         |  23   | Miembro desbaneado                                                                       |                                      |
| MemberUpdate                            |  24   | Miembro fue actualizado en el servidor                                                   |               Miembro                |
| MemberRoleUpdate                        |  25   | Se ha añadido o eliminado un miembro de un rol                                           |             Rol parcial              |
| MemberMove                              |  26   | Miembro movido a otro canal de voz                                                       |                                      |
| MemberDisconnect                        |  27   | Miembro desconectado de un canal de voz                                                  |                                      |
| BotAdd                                  |  28   | Bot añadido al servidor                                                                  |                                      |
| RoleCreate                              |  30   | Se creó rol                                                                              |                 Rol                  |
| RoleUpdate                              |  31   | Rol actualizado                                                                          |                 Rol                  |
| RoleDelete                              |  32   | Rol eliminado                                                                            |                 Rol                  |
| InviteCreate                            |  40   | Se ha creado invitación al servidor                                                      | Invitación y metadatos de invitación |
| InviteUpdate                            |  41   | Se ha actualizado invitación al servidor                                                 | Invitación y metadatos de invitación |
| InviteDelete                            |  42   | Se ha eliminado invitación al servidor                                                   | Invitación y metadatos de invitación |
| WebhookCreate                           |  50   | Se ha creado webhook                                                                     |               Webhook                |
| WebhookUpdate                           |  51   | Se han actualizado las propiedades o el canal del webhook                                |               Webhook                |
| WebhookDelete                           |  52   | Webhook eliminado                                                                        |               Webhook                |
| EmojiCreate                             |  60   | Se creó Emoji                                                                            |                Emoji                 |
| EmojiUpdate                             |  61   | Se ha actualizado nombre de emoji                                                        |                Emoji                 |
| EmojiDelete                             |  62   | Emoji fue eliminado                                                                      |                Emoji                 |
| MessageDelete                           |  72   | Se ha borrado un solo mensaje                                                            |                                      |
| MessageBulkDelete                       |  73   | Se han borrado varios mensajes                                                           |                                      |
| MessagePin                              |  74   | Mensaje se ha fijado en un canal                                                         |                                      |
| MessageUnPin                            |  75   | Se ha eliminado un mensaje de los fijados de un canal                                    |                                      |
| IntegrationCreate                       |  80   | Aplicación se ha añadido al servidor                                                     |             Integración              |
| IntegrationUpdate                       |  81   | Se ha actualizado aplicación (por ejemplo, se han actualizado sus ámbitos)               |             Integración              |
| IntegrationDelete                       |  82   | Aplicación ha sido eliminada del servidor                                                |             Integración              |
| StageInstanceCreate                     |  83   | Se ha creado la instancia del escenario (el canal del escenario pasa a estar en directo) |         Escenario instancia          |
| StageInstanceUpdate                     |  84   | Se han actualizado los detalles de la instancia de escenario                             |         Escenario instancia          |
| StageInstanceDelete                     |  85   | Se ha eliminado instancia de escenario (el canal de escenario ya no está en directo)     |         Escenario instancia          |
| StickerCreate                           |  90   | Se creó sticker                                                                          |               Sticker                |
| StickerUpdate                           |  91   | Se han actualizado los detalles de un sticker                                            |               Sticker                |
| StickerDelete                           |  92   | Se ha eliminado sticker                                                                  |               Sticker                |
| GuildScheduledEventCreate               |  100  | Evento creado                                                                            |    Evento programado del servidor    |
| GuildScheduledEventUpdate               |  101  | Evento actualizado                                                                       |    Evento programado del servidor    |
| GuildScheduledEventDelete               |  102  | Evento cancelado                                                                         |    Evento programado del servidor    |
| ThreadCreate                            |  110  | Se ha creado un hilo en un canal                                                         |                 Hilo                 |
| ThreadUpdate                            |  111  | Hilo actualizado                                                                         |                 Hilo                 |
| ThreadDelete                            |  112  | Hilo eliminado                                                                           |                 Hilo                 |
| ApplicationCommandPermissionUpdate      |  121  | Se han actualizado los permisos de un comando                                            |          Permiso de comando          |
| AutoModerationRuleCreate                |  140  | Se ha creado una regla de moderación automática                                          |    Regla de moderación automática    |
| AutoModerationRuleUpdate                |  141  | Se ha actualizado una regla de moderación automática                                     |    Regla de moderación automática    |
| AutoModerationRuleDelete                |  142  | Se ha eliminado una regla de moderación automática                                       |    Regla de moderación automática    |
| AutoModerationBlockMessage              |  143  | Mensaje bloqueado por Moderación Automática                                              |                                      |
| AutoModerationFlagToChannel             |  144  | Mensaje marcado por la moderación automática                                             |                                      |
| AutoModerationUserCommunicationDisabled |  145  | La Moderación Automática ha aisla un miembro                                             |                                      |


## Ejemplo(s)

Esto devolverá sus últimos baneos (que se registran en los registros de auditoría):

```javascript
bot.command({
    name: 'getAuditLogs',
    code: `
  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]
  `
});
```
