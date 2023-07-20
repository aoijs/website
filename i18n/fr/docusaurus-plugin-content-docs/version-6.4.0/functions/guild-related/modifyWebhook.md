---
title: '$modifyWebhook'
description: '$modifyWebhook modifiera le webhook donné.'
id: modifyWebhook
---

`$modifyWebhook` modifiera le webhook donné.

## Utilisation

```php
$modifyWebhook[IDwebhook;nom;avatar;IDsalon?;raison?]
```

## Paramètres

| Champ     | Type                 | Description                                        | Obligatoire |
| --------- | -------------------- | -------------------------------------------------- |:-----------:|
| IDwebhook | entier               | L'ID du webhook à modifier.                        |    vrai     |
| nom       | chaîne de caractères | Nouveau nom de webhook.                            |    vrai     |
| avatar    | chaîne de caractères | Nouvel avatar de webhook.                          |    vrai     |
| IDsalon?  | entier               | ID du salon dans lequel se trouve le webhook.      |    faux     |
| raison?   | chaîne de caractères | Raison qui sera affichée dans les logs du serveur. |    faux     |

## Exemple(s)

Ceci va modifier un webhook existant et modifier son avatar à votre avatar:

```javascript
bot.command({
    name: 'ModifierWebhook',
    code: `
  $modifyWebhook[webhookID;Bonjour!;$userAvatar[$authorID];$channelID;Test!]
  `
});
```