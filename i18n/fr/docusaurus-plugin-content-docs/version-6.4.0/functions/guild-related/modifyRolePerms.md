---
title: '$modifyRolePerms'
description: '$modifyRolePerms modifiera les permissions d''un rôle donné.'
id: modifyRolePerms
---

`$modifyRolePerms` modifiera les permissions d'un rôle donné.

## Utilisation

```php
$modifyRolePerms[IDserveur;IDrôle;...permissions]
```

## Paramètres

| Champ          | Type                 | Description                                                              | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------------------------------ |:-----------:|
| IDserveur      | entier               | L'ID du serveur où se trouve le rôle.                                    |    vrai     |
| IDrôle         | entier               | ID du rôle qui sera modifié. / `$guildID` représente le rôle `@everyone` |    vrai     |
| ...permissions | chaîne de caractères | Permissions à modifier.                                                  |    vrai     |

|     | Libellé                                                             |
| --- | ------------------------------------------------------------------- |
| `-` | Refuser une permission spécifique à quelqu'un ou quelque chose.     |
| `+` | Permettre une permission spécifique à quelqu'un ou à quelque chose. |
| `/` | Réinitialiser une permission spécifique à son état par défaut.      |

Vous pouvez trouver toutes les permissions __[ici](../../../../../../versioned_docs/version-6.4.0/guides/client/2permissionsintents.md)__.

## Exemple(s)

Ceci va permettre au rôle "@everyone" d'envoyer des messages et d'ajouter des réactions:

```javascript
bot.command({
    name: 'modifierPermissionsRôles',
    code: `
  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]"
  }]
  `
});
```