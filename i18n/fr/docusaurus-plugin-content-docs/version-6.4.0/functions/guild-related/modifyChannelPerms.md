---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms modifiera les dérogations de permission d''un salon donné.'
id: modifyChannelPerms
---

`$modifyChannelPerms` modifiera les dérogations de permission d'un salon donné.

## Utilisation

```php
$modifyChannelPerms[IDsalon;IDroru;...permissions]
```

## Paramètres

| Champ          | Type                 | Description                                                                   | Obligatoire |
| -------------- | -------------------- | ----------------------------------------------------------------------------- |:-----------:|
| IDsalon        | entier               | L'ID du salon dont vous essayez de modifier ses permissions.                  |    vrai     |
| IDroru         | entier               | L'ID d'un membre ou d'un rôle. ( `$guildID` représente le rôle `@everyone`. ) |    vrai     |
| ...permissions | chaîne de caractères | Les permissions qui seront modifiées.                                         |    vrai     |

|     | Description                                                         |
| --- | ------------------------------------------------------------------- |
| `-` | Refuser une permission spécifique à quelqu'un ou quelque chose.     |
| `+` | Autoriser une permission spécifique à quelqu'un ou à quelque chose. |
| `/` | Réinitialiser une permission spécifique à son état par défaut.      |

Vous pouvez trouver toutes les permissions __[ici](../../../../../../versioned_docs/version-6.4.0/guides/client/2permissionsintents.md)__.

## Exemple(s)

Cela permettra à `@everyone` d'envoyer des messages et d'ajouter des réactions dans le salon actuel:

```javascript
bot.command({
    name: 'modifierPermissionSalon',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
