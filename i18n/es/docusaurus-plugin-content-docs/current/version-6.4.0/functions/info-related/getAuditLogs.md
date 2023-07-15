---
title: '$getAuditLogs'
description: '$getAuditLogs will retrieve guild audit logs according to the given arguments.'
id: getAuditLogs
---

`$getAuditLogs` will retrieve guild audit logs according to the given arguments.

## Modo de uso

```php
$getAuditLogs[guildID;userID?;limit?;action?;format?]
```

## Parámetros

| Campo      | Tipo   | Descripción                                            | Requerido |
| ---------- | ------ | ------------------------------------------------------ |:---------:|
| servidorID | entero | The ID of a specific guild.                            |    sí     |
| usarioID?  | entero | The user who executed the action stated in audit logs. |    no     |
| limit?     | número | The maximum of audit logs it will return.              |    no     |
| action?    | entero | The action that was executed.                          |    no     |
| format?    | string | The format to return the audit logs in.                |    no     |

| Format              |                                                                   |
| ------------------- | ----------------------------------------------------------------- |
| {executor.username} | Will return the username of the user who excuted the action       |
| {executor.mention}  | Will mention the user who executed the action                     |
| {executor.id}       | Will return the user ID of the user who executed the action       |
| {executor.tag}      | Will return the discriminator of the user who executed the action |
| {target.id}         | Will return the ID of the user who was the target of the action   |
| {action}            | Will return the action itself                                     |
| {id}                | Will return the action/auditlog ID                                |

## AuditLogEvents

| EVENT                                   | VALUE | DESCRIPTION                                               |       OBJECT CHANGED       |
| --------------------------------------- |:-----:| --------------------------------------------------------- |:--------------------------:|
| GuildUpdate                             |   1   | Server settings were updated                              |           Guild            |
| ChannelCreate                           |  10   | Channel was created                                       |          Channel           |
| ChannelUpdate                           |  11   | Channel settings were updated                             |          Channel           |
| ChannelDelete                           |  12   | Channel was deleted                                       |          Channel           |
| ChannelOverwriteCreate                  |  13   | Permission overwrite was added to a channel               |     Channel Overwrite      |
| ChannelOverwriteUpdate                  |  14   | Permission overwrite was updated for a channel            |     Channel Overwrite      |
| ChannelOverwriteDelete                  |  15   | Permission overwrite was deleted from a channel           |     Channel Overwrite      |
| MemberKick                              |  20   | Member was removed from server                            |                            |
| MemberPrune                             |  21   | Members were pruned from server                           |                            |
| MemberBanAdd                            |  22   | Member was banned from server                             |                            |
| MemberBanRemove                         |  23   | Server ban was lifted for a member                        |                            |
| MemberUpdate                            |  24   | Member was updated in server                              |           Member           |
| MemberRoleUpdate                        |  25   | Member was added or removed from a role                   |        Partial Role        |
| MemberMove                              |  26   | Member was moved to a different voice channel             |                            |
| MemberDisconnect                        |  27   | Member was disconnected from a voice channel              |                            |
| BotAdd                                  |  28   | Bot user was added to server                              |                            |
| RoleCreate                              |  30   | Role was created                                          |            Role            |
| RoleUpdate                              |  31   | Role was edited                                           |            Role            |
| RoleDelete                              |  32   | Role was deleted                                          |            Role            |
| InviteCreate                            |  40   | Server invite was created                                 | Invite and Invite Metadata |
| InviteUpdate                            |  41   | Server invite was updated                                 | Invite and Invite Metadata |
| InviteDelete                            |  42   | Server invite was deleted                                 | Invite and Invite Metadata |
| WebhookCreate                           |  50   | Webhook was created                                       |          Webhook           |
| WebhookUpdate                           |  51   | Webhook properties or channel were updated                |          Webhook           |
| WebhookDelete                           |  52   | Webhook was deleted                                       |          Webhook           |
| EmojiCreate                             |  60   | Emoji was created                                         |           Emoji            |
| EmojiUpdate                             |  61   | Emoji name was updated                                    |           Emoji            |
| EmojiDelete                             |  62   | Emoji was deleted                                         |           Emoji            |
| MessageDelete                           |  72   | Single message was deleted                                |                            |
| MessageBulkDelete                       |  73   | Multiple messages were deleted                            |                            |
| MessagePin                              |  74   | Message was pinned to a channel                           |                            |
| MessageUnPin                            |  75   | Message was unpinned from a channel                       |                            |
| IntegrationCreate                       |  80   | App was added to server                                   |        Integration         |
| IntegrationUpdate                       |  81   | App was updated (as an example, its scopes were updated)  |        Integration         |
| IntegrationDelete                       |  82   | App was removed from server                               |        Integration         |
| StageInstanceCreate                     |  83   | Stage instance was created (stage channel becomes live)   |       Stage Instance       |
| StageInstanceUpdate                     |  84   | Stage instance details were updated                       |       Stage Instance       |
| StageInstanceDelete                     |  85   | Stage instance was deleted (stage channel no longer live) |       Stage Instance       |
| StickerCreate                           |  90   | Sticker was created                                       |          Sticker           |
| StickerUpdate                           |  91   | Sticker details were updated                              |          Sticker           |
| StickerDelete                           |  92   | Sticker was deleted                                       |          Sticker           |
| GuildScheduledEventCreate               |  100  | Event was created                                         |   Guild Scheduled Event    |
| GuildScheduledEventUpdate               |  101  | Event was updated                                         |   Guild Scheduled Event    |
| GuildScheduledEventDelete               |  102  | Event was cancelled                                       |   Guild Scheduled Event    |
| ThreadCreate                            |  110  | Thread was created in a channel                           |           Thread           |
| ThreadUpdate                            |  111  | Thread was updated                                        |           Thread           |
| ThreadDelete                            |  112  | Thread was deleted                                        |           Thread           |
| ApplicationCommandPermissionUpdate      |  121  | Permissions were updated for a command                    |     Command Permission     |
| AutoModerationRuleCreate                |  140  | Auto Moderation rule was created                          |    Auto Moderation Rule    |
| AutoModerationRuleUpdate                |  141  | Auto Moderation rule was updated                          |    Auto Moderation Rule    |
| AutoModerationRuleDelete                |  142  | Auto Moderation rule was deleted                          |    Auto Moderation Rule    |
| AutoModerationBlockMessage              |  143  | Message was blocked by Auto Moderation                    |                            |
| AutoModerationFlagToChannel             |  144  | Message was flagged by Auto Moderation                    |                            |
| AutoModerationUserCommunicationDisabled |  145  | Member was timed out by Auto Moderation                   |                            |


## Ejemplo(s)

This will return your latest bans (which are logged in audit logs):

```javascript
bot.command({
    name: 'getAuditLogs',
    code: `
  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]
  `
});
```
