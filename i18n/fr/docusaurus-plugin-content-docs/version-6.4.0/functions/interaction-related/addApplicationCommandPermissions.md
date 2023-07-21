---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions changera les permissions d''une commande slash.'
id: addApplicationCommandPermissions
---

## Utilisation

```php
$addApplicationCommandPermissions[IDserveur/global?;ID;...perms]
```

## Paramètres

| Champ            | Type                 | Description                                                                                              | Obligatoire |
| ---------------- | -------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur/global | chaîne, entier       | Type de commande de l'application. <br/> 1. **global** <br/> 2. **ID spécifique de serveur** |    vrai     |
| ID               | entier               | ID de la commande d'application.                                                                         |    vrai     |
| ...perms         | chaîne de caractères | Autorisations.                                                                                           |    vrai     |

## Exemple(s)

Ceci désactivera la commande slash pour tous les membres de la guilde (assurez-vous de remplacer "ID" par la commande slash ID réelle) :

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
