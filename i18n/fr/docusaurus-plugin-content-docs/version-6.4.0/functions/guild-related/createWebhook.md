---
title: '$createWebhook'
description: '$createWebhook créera un webhook.'
id: createWebhook
---

`$createWebhook` créera un webhook.

## Utilisation

```php
$createWebhook[IDsalon;nom;avatar;raison;sép?]
```

## Paramètres

| Champ   | Type                 | Description                                                                                                                | Obligatoire |
| ------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon | entier               | ID du salon dans lequel le webhook sera créé.                                                                              |    vrai     |
| nom     | chaine de caractères | Le nom d'affichage du webhook.                                                                                             |    vrai     |
| avatar  | chaine de caractères | L'URL de l'avatar du webhook.                                                                                              |    vrai     |
| raison  | chaîne de caractères | Raison qui sera affichée dans les logs du serveur.                                                                         |    vrai     |
| sép?    | chaine de caractères | Le séparateur qui sera utilisé pour séparer les identifiants importants comme le token et l'ID, séparateur par défaut `,`. |    faux     |

## Exemple(s)

Ceci va créer un webhook dans le salon actuel :

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js est bien;$userAvatar[$authorID];Juste un test.;, ]
  `
});
```
