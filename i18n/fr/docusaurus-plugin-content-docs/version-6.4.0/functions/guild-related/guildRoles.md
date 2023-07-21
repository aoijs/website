---
title: '$guildRoles'
description: '$guildRoles renverra tous les rôles d''un serveur spécifique.'
id: guildRoles
---

`$guildRoles` renverra tous les rôles d'un serveur spécifique.

## Utilisation

```php
$guildRoles[IDserveur?;option?;séparateur?]
```

## Paramètres

| Champ       | Type                 | Description                                                                                                                             | Obligatoire |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur?  | entier               | L'ID du serveur.                                                                                                                        |    faux     |
| option?     | chaîne de caractères | Les options sur la façon de renvoyer les rôles <br /> 1. **name** (par défaut) <br /> 2. **id** <br /> 3. **mention** |    faux     |
| séparateur? | chaîne de caractères | Séparateur pour séparer les rôles à renvoyer.                                                                                           |    faux     |

## Exemple(s)

Cela renverra tous les rôles du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurRôles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
