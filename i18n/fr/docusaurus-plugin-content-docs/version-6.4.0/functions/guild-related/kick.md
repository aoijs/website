---
title: '$kick'
description: '$kick expulsera un membre d''un serveur donné.'
id: kick
---

`$kick` expulsera un membre d'un serveur donné.

## Utilisation

```php
$kick[IDserveur;IDmembre;raison?]
```

## Paramètres

| Champ     | Type                 | Description                                                    | Obligatoire |
| --------- | -------------------- | -------------------------------------------------------------- |:-----------:|
| IDserveur | entier               | L'ID du serveur dans lequel le membre donné doit être expulsé. |    vrai     |
| IDmembre  | entier               | L'ID de l'utilisateur qui sera expulsé du serveur.             |    vrai     |
| raison?   | chaîne de caractères | La raison qui sera affichée dans les logs du serveur.          |    faux     |

## Exemple(s)

Cela expulsera le membre trouvé dans le $message de la commande, du serveur dans lequel celui-ci est exécuté.

```javascript
bot.command({
    name: 'expulser',
    code: `
  <@$findMember[$message;false]> a été expulsé!
  $kick[$guildID;$findMember[$message;false];un exemple de raison!]
  `
});
```
