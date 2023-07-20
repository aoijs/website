---
title: $highestRole
description: '$userHighestRole renvoie le rôle le plus haut d''un serveur spécifique.'
id: highestRole
---

`$userHighestRole` renvoie le rôle le plus haut d'un serveur spécifique.

## Utilisation

```php
$highestRole[IDutilisateur?;IDserveur?;option?]
```

## Paramètres

| Champ          | Type                 | Description                                                                                                                    | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |:-----------:|
| IDutilisateur? | entier               | L'ID de l'utilisateur dont vous voulez que le rôle le plus élevé soit retourné.                                                |    Faux     |
| IDserveur?     | entier               | L'ID du serveur.                                                                                                               |    Faux     |
| option?        | chaîne de caractères | L'option de comment retourner le rôle <br /> 1. **name** <br /> 2. **id** (par défaut) <br /> 3. **mention** |    Faux     |

## Exemple(s)

Cela retournera le nom de votre rôle le plus élevé :

```javascript
bot.command({
    name: 'userHighestRole',
    code: `
  $userHighestRole[$authorID;$guildID;name]
  `
});
```
