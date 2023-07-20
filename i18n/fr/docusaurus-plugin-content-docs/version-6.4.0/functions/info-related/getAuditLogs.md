---
title: '$getAuditLogs'
description: '$getAuditLogs récupérera les logs du serveur en fonction des arguments donnés.'
id: getAuditLogs
---

`$getAuditLogs` récupérera les logs du serveur en fonction des arguments donnés.

## Utilisation

```php
$getAuditLogs[IDserveur;IDutilisateur?;limite?;action?;format?]
```

## Paramètres

| Champ          | Type                 | Description                                                  | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------------------ |:-----------:|
| IDserveur      | entier               | L'ID d'un serveur spécifique.                                |    vrai     |
| IDutilisateur? | entier               | L'utilisateur qui a exécuté l'action indiquée dans les logs. |    Faux     |
| limite?        | nombre               | Le maximum de logs à retourner.                              |    Faux     |
| action?        | entier               | L'action qui a été exécutée.                                 |    Faux     |
| format?        | chaîne de caractères | Le format pour retourner les logs.                           |    Faux     |

| Formats             |                                                                      |
| ------------------- | -------------------------------------------------------------------- |
| {executor.username} | Renverra le nom d'utilisateur de l'utilisateur qui a excusé l'action |
| {executor.mention}  | Mentionnera l'utilisateur qui a exécuté l'action                     |
| {executor.id}       | Renvoie l'ID de l'utilisateur qui a exécuté l'action                 |
| {executor.tag}      | Renvoie le discriminateur de l'utilisateur qui a exécuté l'action    |
| {target.id}         | Renvoie l'ID de l'utilisateur qui a été la cible de l'action         |
| {action}            | Retournera l'action elle-même                                        |
| {id}                | Renvoie l'identifiant de l'action.                                   |

## Évènements des logs

| ÉVÉNEMENT                               | VALEUR | DESCRIPTION                                                                       |                OBJET CHANGÉ                |
| --------------------------------------- |:------:| --------------------------------------------------------------------------------- |:------------------------------------------:|
| GuildUpdate                             |   1    | Les paramètres du serveur ont été mis à jour                                      |                  Serveur                   |
| ChannelCreate                           |   10   | Un salon a été créé                                                               |                   Salon                    |
| ChannelUpdate                           |   11   | Les paramètres du salon ont été mis à jour                                        |                   Salon                    |
| ChannelDelete                           |   12   | Le salon a été supprimé                                                           |                   Salon                    |
| ChannelOverwriteCreate                  |   13   | Une réécriture a été ajoutée au salon                                             |            Réécriture de salon             |
| ChannelOverwriteUpdate                  |   14   | Les réécritures d'un salon ont été mises à jour                                   |            Réécriture de salon             |
| ChannelOverwriteDelete                  |   15   | Une réécriture de salon a été supprimée                                           |            Réécriture de salon             |
| MemberKick                              |   20   | Un membre a été expulsé du serveur                                                |                                            |
| MemberPrune                             |   21   | Un membre a été exclu temporairement du serveur                                   |                                            |
| MemberBanAdd                            |   22   | Un membre a été banni du serveur                                                  |                                            |
| MemberBanRemove                         |   23   | Un membre a été débanni du serveur                                                |                                            |
| MemberUpdate                            |   24   | Un membre a été mis à jour sur le serveur                                         |                   Membre                   |
| MemberRoleUpdate                        |   25   | Un membre a été ajouté ou retiré d'un rôle                                        |                    Rôle                    |
| MemberMove                              |   26   | Un membre a été déplacé vers un salon vocal différent                             |                                            |
| MemberDisconnect                        |   27   | Le membre a été déconnecté d'un salon vocal                                       |                                            |
| BotAdd                                  |   28   | Un bot a été ajouté au serveur                                                    |                                            |
| RoleCreate                              |   30   | Un rôle a été créé                                                                |                    Rôle                    |
| RoleUpdate                              |   31   | Un rôle a été modifié                                                             |                    Rôle                    |
| RoleDelete                              |   32   | Un rôle a été supprimé                                                            |                    Rôle                    |
| InviteCreate                            |   40   | Une invitation au serveur a été créée                                             |     Inviter et inviter des métadonnées     |
| InviteUpdate                            |   41   | Un invitation au serveur a été mise à jour                                        | Invitations et métadonnées des invitations |
| InviteDelete                            |   42   | Une invitation au serveur a été supprimée                                         | Invitations et métadonnées des invitations |
| WebhookCreate                           |   50   | Webhook a été créé                                                                |                  Webhook                   |
| WebhookUpdate                           |   51   | Les propriétés d'un webhook ou du salon ont été mises à jour                      |                  Webhook                   |
| WebhookDelete                           |   52   | Un webhook a été supprimé                                                         |                  Webhook                   |
| EmojiCréer                              |   60   | Un émoji a été créé                                                               |                   Emoji                    |
| EmojiUpdate                             |   61   | Le nom d'un émoji a été mis à jour                                                |                   Emoji                    |
| EmojiDelete                             |   62   | Un émoji a été supprimé                                                           |                   Emoji                    |
| MessageDelete                           |   72   | Un seul message a été supprimé                                                    |                                            |
| MessageBulkDelete                       |   73   | Plusieurs messages ont été supprimés                                              |                                            |
| MessagePin                              |   74   | Un message a été épinglé sur un salon                                             |                                            |
| MessageUnPin                            |   75   | Un message a été désépinglé d'un salon                                            |                                            |
| IntegrationCreate                       |   80   | Une application a été ajoutée au serveur                                          |                Intégration                 |
| IntegrationUpdate                       |   81   | Une application a été mise à jour (par exemple, ses portées ont été mises à jour) |                Intégration                 |
| IntegrationDelete                       |   82   | Une application a été retirée du serveur                                          |                Intégration                 |
| StageInstanceCreate                     |   83   | Une conférence a été créée (le salon de conférence passe en direct)               |            Salon de conférence             |
| StageInstanceUpdate                     |   84   | Les détails d'une conférence ont été mis à jour                                   |            Salon de conférence             |
| StageInstanceDelete                     |   85   | La conférence a été arrêtée (le salon de conférence n'est plus en direct)         |            Salon de conférence             |
| StickerCreate                           |   90   | Un autocollant a été créé                                                         |                Autocollant                 |
| StickerUpdate                           |   91   | Les détails d'un autocollant ont été mis à jour                                   |                Autocollant                 |
| StickerDelete                           |   92   | L'autocollant a été supprimé                                                      |                Autocollant                 |
| GuildScheduledEventCreate               |  100   | Un événement a été créé                                                           |       Événement planifié de serveur        |
| GuildScheduledEventUpdate               |  101   | Un événement a été mis à jour                                                     |       Événement planifié de serveur        |
| GuildScheduledEventDelete               |  102   | Un événement a été annulé                                                         |       Événement planifié de serveur        |
| ThreadCreate                            |  110   | Un fil de discussion a été créé dans un salon                                     |             Fil de discussion              |
| ThreadUpdate                            |  111   | Un fil de discussion a été mis à jour                                             |             Fil de discussion              |
| ThreadDelete                            |  112   | Un fil de discussion a été supprimé                                               |             Fil de discussion              |
| ApplicationCommandPermissionUpdate      |  121   | Les permissions ont été mises à jour pour une commande                            |          Autorisation de commande          |
| AutoModerationRuleCreate                |  140   | Une règle de modération automatique a été créée                                   |      Règle de modération automatique       |
| AutoModerationRuleUpdate                |  141   | Une règle de modération automatique a été mise à jour                             |      Règle de modération automatique       |
| AutoModerationRuleDelete                |  142   | Une règle de modération automatique a été supprimée                               |      Règle de modération automatique       |
| AutoModerationBlockMessage              |  143   | Un message a été bloqué par la modération automatique                             |                                            |
| AutoModerationFlagToChannel             |  144   | Un message a été signalé par la modération automatique                            |                                            |
| AutoModerationUserCommunicationDisabled |  145   | Un membre a été exclu temporairement par la modération automatique                |                                            |


## Exemple(s)

Cela retournera vos derniers bannissements (qui sont enregistrés dans les logs du serveur) :

```javascript
bot.command({
    name: 'getAuditLogs',
    code: `
  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]
  `
});
```
