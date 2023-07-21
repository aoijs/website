---
title: '$hoistedRole'
description: '$hoistedRole renvoie le rôle le plus haut affiché séparément d''un utilisateur.'
id: hoistedRole
---

`$hoistedRole` renvoie le rôle le plus haut affiché séparément d'un utilisateur.

## Utilisation

```php
$hoistedRole[IDutilisateur?;IDserveur?;option?]
```

## Paramètres

| Champ          | Type                 | Description                                                                                                                  | Obligatoire |
| -------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDutilisateur? | entier               | L'ID de l'utilisateur.                                                                                                       |    Faux     |
| IDserveur?     | entier               | l'ID du serveur.                                                                                                             |    Faux     |
| option?        | chaîne de caractères | L'option comment retourner le rôle <br /> 1. **name** <br /> 2. **id**  (par défaut) <br /> 3. **mention** |    Faux     |

## Exemple(s)

Cela renverra le nom de votre rôle le plus élevé affiché séparément :

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
