---
title: '$removeApplicationCommandPermissions'
description: '$removeApplicationCommandPermissions supprimera les permissions d''un utilisateur ou d''un rôle d''une commande d''application spécifique.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` supprimera les permissions d'un utilisateur ou d'un rôle d'une commande d'application spécifique.

## Utilisation

```php
$removeApplicationCommandPermissions[IDserveur/global;ID;...roruIds]
```

## Paramètres

| Champ            | Type                         | Description                                                                                              | Obligatoire |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur/global | entier                       | Type de commande de l'application. <br/> 1. **global** <br/> 2. **ID spécifique de serveur** |    vrai     |
| ID               | entier                       | L'ID de la commande d'application à modifier.                                                            |    vrai     |
| roruIds          | entier, chaîne de caractères | Rôles ou utilisateurs pour modifier/supprimer les permissions, séparés par des virgules.                 |    vrai     |
