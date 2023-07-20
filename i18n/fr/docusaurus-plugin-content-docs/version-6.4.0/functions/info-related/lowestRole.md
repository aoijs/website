---
title: '$userLowestRole'
description: <code>$userLowestRole</code> renverra le rôle le plus bas d'un utilisateur spécifique.
id: lowestRole
---

`$userLowestRole` renverra le rôle le plus bas d'un utilisateur spécifique.

## Utilisation

```php
$lowestRole[IDutilisateur?;IDserveur?]
```

## Paramètres

| Champ          | Type   | Description                                                                 | Obligatoire |
| -------------- | ------ | --------------------------------------------------------------------------- |:-----------:|
| IDutilisateur? | entier | ID de l'utilisateur dont vous voulez que le rôle le plus bas soit retourné. |    Faux     |
| IDserveur?     | entier | L'ID du serveur.                                                            |    Faux     |

## Exemple(s)

Ceci retournera l'ID de votre rôle le plus bas :

```javascript
bot.command({
    name: 'userLowestRole',
    code: `
  $userLowestRole[$authorID;$guildID]
  `
});
```
