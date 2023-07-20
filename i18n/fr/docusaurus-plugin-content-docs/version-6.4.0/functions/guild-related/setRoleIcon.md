---
title: '$setRoleIcon'
description: '$setRoleIcon définira l''icône d''un rôle spécifique.'
id: setRoleIcon
---

`$setRoleIcon` définira l'icône d'un rôle spécifique.

## Utilisation

```php
$setRoleIcon[IDserveur;IDrôle;icône]
```

## Paramètres

| Champ     | Type                 | Description                        | Obligatoire |
| --------- | -------------------- | ---------------------------------- | ----------- |
| IDserveur | entier               | L'ID du serveur où le rôle existe. | faux        |
| IDrôle    | entier               | L'ID du rôle.                      | faux        |
| icône     | chaîne de caractères | L'URL de l'icône.                  | faux        |

## Exemple(s)

Ceci changera l'icône d'un rôle donné en l'icône spécifiée:

```javascript
bot.command({
    name: 'déinirRôleIcône',
    code: `
  $setRoleIcon[$guildID;IDrôle;URLicône]
  `
});
```