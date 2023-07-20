---
title: $highestGuildRole
description: '$guildHighestRole renverra le rôle le plus élevé d''un serveur spécifique.'
id: highestGuildRole
---

`$guildHighestRole` renverra le rôle le plus élevé d'un serveur spécifique.

## Utilisation

```php
$guildHighestRole[IDserveur?;option?]
```

## Paramètres

| Champ      | Type                 | Description                                                                                                                         | Obligatoire |
| ---------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur? | entier               | L'ID du serveur.                                                                                                                    |    faux     |
| option?    | chaine de caractères | L'option sur la façon de retourner le rôle <br /> 1. **name** (par défaut) <br /> 2. **id** <br /> 3. **mention** |    faux     |

## Exemple(s)

Cela renverra le nom du rôle le plus élevé du serveur dans lequel la commande a été exécutée:

```javascript
bot.command({
    name: 'roleLePlusElevé',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
