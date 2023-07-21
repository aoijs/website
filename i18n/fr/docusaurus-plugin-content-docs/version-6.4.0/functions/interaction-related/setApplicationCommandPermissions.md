---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions définira les permissions d''une commande d''application spécifique.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` définira les permissions d'une commande d'application spécifique.

## Utilisation

```php
$setApplicationCommandPermissions[IDserveur/global;ID;...permissions]
```

## Paramètres

| Champ            | Type                         | Description                                                                                              | Obligatoire |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur/global | entier, chaîne de caractères | Type de commande de l'application. <br/> 1. **global** <br/> 2. **ID spécifique de serveur** |    vrai     |
| ID               | entier                       | ID de la commande d'application.                                                                         |    vrai     |
| ...perms         | chaîne de caractères         | Permissions à changer.                                                                                   |    vrai     |