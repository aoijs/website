---
title: '$getAuditLogs'
description: '$getAuditLogs wird Gilden-Audit-Protokolle gemäß den angegebenen Argumenten abrufen.'
id: getAuditLogs
---

`$getAuditLogs` wird Gildenaudit-Protokolle gemäß den angegebenen Argumenten abrufen.

## Verwendung

```php
$getAuditLogs[guildID;userID?;limit?;action?;format?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                   | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------------------------------ |:------------:|
| guildID      | ganze Zahl | Die ID einer bestimmten Gilde.                                                 |     wahr     |
| userID?      | ganze Zahl | Der Benutzer, der die Aktion ausgeführt hat, die im Audit-Log angegeben wurde. |    falsch    |
| begrenzen?   | anzahl     | Das Maximum an Auditprotokollen wird zurückgegeben.                            |    falsch    |
| Aktion?      | ganze Zahl | Die ausgeführte Aktion.                                                        |    falsch    |
| formatieren? | string     | Das Format, in dem die Audit zurückgegeben werden soll.                        |    falsch    |

| Format              |                                                                            |
| ------------------- | -------------------------------------------------------------------------- |
| {executor.username} | Gibt den Benutzernamen des Benutzers zurück, der die Aktion auslöste       |
| {executor.mention}  | Erwähnen Sie den Benutzer, der die Aktion ausgeführt hat                   |
| {executor.id}       | Gibt die Benutzer-ID des Benutzers zurück, der die Aktion ausgeführt hat   |
| {executor.tag}      | Gibt den Diskriminator des Benutzers zurück, der die Aktion ausgeführt hat |
| {target.id}         | Gibt die ID des Benutzers zurück, der das Ziel der Aktion war              |
| {action}            | Gibt die Aktion selbst zurück                                              |
| {id}                | Gibt die Action/Auditlog ID zurück                                         |

## AuditLog-Ereignisse

| EVENT                                      | VALUE | BESCHREIBUNG                                                               |         OBJEKT GEÄNDERT         |
| ------------------------------------------ |:-----:| -------------------------------------------------------------------------- |:-------------------------------:|
| GuildUpdate                                |   1   | Servereinstellungen wurden aktualisiert                                    |              Gilde              |
| ChannelCreate                              |  10   | Kanal wurde erstellt                                                       |              Kanal              |
| ChannelUpdate                              |  11   | Kanaleinstellungen wurden aktualisiert                                     |              Kanal              |
| Kanal löschen                              |  12   | Kanal wurde gelöscht                                                       |              Kanal              |
| ChannelOverwriteCreate                     |  13   | Berechtigungsüberschreibung wurde einem Kanal hinzugefügt                  |       Kanal überschreiben       |
| ChannelOverwriteUpdate                     |  14   | Das Überschreiben der Berechtigung wurde für einen Kanal aktualisiert      |       Kanal überschreiben       |
| ChannelOverwriteDelete                     |  15   | Das Überschreiben der Berechtigung wurde aus einem Kanal gelöscht          |       Kanal überschreiben       |
| MemberKick                                 |  20   | Mitglied wurde vom Server entfernt                                         |                                 |
| MemberPrune                                |  21   | Mitglieder wurden vom Server abgeschnitten                                 |                                 |
| MemberBanAdd                               |  22   | Mitglied wurde vom Server gesperrt                                         |                                 |
| MemberBanEntfernen                         |  23   | Serversperre wurde für ein Mitglied aufgehoben                             |                                 |
| MemberUpdate                               |  24   | Mitglied wurde auf dem Server aktualisiert                                 |            Mitglied             |
| MemberRoleUpdate                           |  25   | Mitglied wurde hinzugefügt oder aus einer Rolle entfernt                   |         Partielle Rolle         |
| MemberMove                                 |  26   | Mitglied wurde in einen anderen Sprachkanal verschoben                     |                                 |
| Mitgliedertrennung                         |  27   | Mitglied wurde von einem Sprachkanal getrennt                              |                                 |
| BotAdd                                     |  28   | Bot Benutzer wurde zum Server hinzugefügt                                  |                                 |
| Rollen erstellen                           |  30   | Rolle wurde erstellt                                                       |              Rolle              |
| RoleUpdate                                 |  31   | Rolle wurde bearbeitet                                                     |              Rolle              |
| RoleDelete                                 |  32   | Rolle wurde gelöscht                                                       |              Rolle              |
| Einladung erstellen                        |  40   | Server-Einladung wurde erstellt                                            | Metadaten einladen und einladen |
| Einladung Update                           |  41   | Server-Einladung wurde aktualisiert                                        | Metadaten einladen und einladen |
| Einladung löschen                          |  42   | Server-Einladung wurde gelöscht                                            | Metadaten einladen und einladen |
| WebhookCreate                              |  50   | Webhook wurde erstellt                                                     |             Webhook             |
| WebhookUpdate                              |  51   | Webhook Eigenschaften oder Kanal wurden aktualisiert                       |             Webhook             |
| WebhookLöschen                             |  52   | Webhook wurde gelöscht                                                     |             Webhook             |
| EmojiCreate                                |  60   | Emoji wurde erstellt                                                       |              Emoji              |
| EmojiUpdate                                |  61   | Emoji-Name wurde aktualisiert                                              |              Emoji              |
| EmojiLöschen                               |  62   | Emoji wurde gelöscht                                                       |              Emoji              |
| Nachricht löschen                          |  72   | Einzelne Nachricht wurde gelöscht                                          |                                 |
| MessageBulkLöschen                         |  73   | Mehrere Nachrichten wurden gelöscht                                        |                                 |
| Nachrichten-Pin                            |  74   | Nachricht wurde an einen Kanal angepinnt                                   |                                 |
| NachrichtUnPin                             |  75   | Nachricht wurde aus einem Kanal entfernt                                   |                                 |
| Integrationserstellung                     |  80   | App wurde zum Server hinzugefügt                                           |           Integration           |
| Integrationsupdate                         |  81   | Die App wurde aktualisiert (als Beispiel wurden die Bereiche aktualisiert) |           Integration           |
| IntegrationLöschen                         |  82   | App wurde vom Server entfernt                                              |           Integration           |
| StageInstanceErstellung                    |  83   | Stage Instanz wurde erstellt (Stage Channel wird live)                     |          Stage Instanz          |
| StageInstanceUpdate                        |  84   | Details der Stage Instanz wurden aktualisiert                              |          Stage Instanz          |
| StageInstanceLöschen                       |  85   | Stage Instanz wurde gelöscht (Stage Channel nicht mehr live)               |          Stage Instanz          |
| StickerCreate                              |  90   | Sticker wurde erstellt                                                     |            Aufkleber            |
| StickerUpdate                              |  91   | Stickerdetails wurden aktualisiert                                         |            Aufkleber            |
| StickerLöschen                             |  92   | Aufkleber wurde gelöscht                                                   |            Aufkleber            |
| GuildScheduledEventErstellung              |  100  | Ereignis wurde erstellt                                                    |    Gilden-Geplantes Ereignis    |
| GuildScheduledEventUpdate                  |  101  | Event wurde aktualisiert                                                   |    Gilden-Geplantes Ereignis    |
| GuildScheduledEventLöschen                 |  102  | Event wurde abgebrochen                                                    |    Gilden-Geplantes Ereignis    |
| ThreadCreate                               |  110  | Thread wurde in einem Kanal erstellt                                       |             Thread              |
| ThreadUpdate                               |  111  | Thread wurde aktualisiert                                                  |             Thread              |
| ThreadDelete                               |  112  | Thread wurde gelöscht                                                      |             Thread              |
| ApplicationCommandPermissionUpdate         |  121  | Berechtigungen wurden für einen Befehl aktualisiert                        |       Befehlsberechtigung       |
| AutoModerationRuleCreate                   |  140  | Automatische Moderation Regel wurde erstellt                               |      Auto-Moderationsregel      |
| AutoModerationRuleUpdate                   |  141  | Moderationsregel wurde aktualisiert                                        |      Auto-Moderationsregel      |
| AutoModerationRegel löschen                |  142  | Automatische Moderationsregel wurde gelöscht                               |      Auto-Moderationsregel      |
| AutoModerationBlockMessage                 |  143  | Nachricht wurde durch automatische Moderation blockiert                    |                                 |
| AutoModerationFlagToChannel                |  144  | Nachricht wurde durch Auto-Moderation markiert                             |                                 |
| AutoModerationUserCommunicationDeaktiviert |  145  | Mitglied wurde durch Auto-Moderation zeitüberschreitet                     |                                 |


## Beispiel(e)

Dies gibt Ihre neuesten Bans zurück (die in Audit-Logs eingeloggt sind):

```javascript
bot.command({
    name: 'getAuditLogs',
    code: `
  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]
  `
});
```
