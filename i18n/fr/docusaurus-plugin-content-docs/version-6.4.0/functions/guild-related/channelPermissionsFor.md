---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor retournera les permissions du salon donné d''un utilisateur ou d''un rôle spécifique.'
id: channelPermissionsFor
---

`$channelPermissionsFor` retournera les permissions du salon donné d'un utilisateur ou d'un rôle spécifique.

## Utilisation

```php
$channelPermissionsFor[IDrôle/IDtilisateur?;IDsalon?;séparateur?]
```

## Paramètres

| Champ                 | Type                 | Description                                                                             | Obligatoire |
| --------------------- | -------------------- | --------------------------------------------------------------------------------------- |:-----------:|
| IDrôle/IDutilisateur? | entier               | L'identifiant de l'utilisateur ou du rôle dont les permissions doivent être renvoyées.  |    vrai     |
| IDsalon?              | entier               | L'ID du salon dont les permissions doivent être renvoyées.                              |    vrai     |
| séparateur?           | chaine de caractères | Le séparateur qui sera utilisé pour séparer les permissions, séparateur par défaut ",". |    faux     |

## Exemple(s)

Cela va renvoyer vos permissions dans le salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'permissionDuSalonPour',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
