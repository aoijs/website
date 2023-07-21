---
title: '$unban'
description: '$unban va débannir un utilisateur donné.'
id: unban
---

`$unban` va débannir un utilisateur donné.

## Utilisation

```php
$unban[IDserveur;IDutilisateur;raison?]
```

## Paramètres

| Champ         | Type                 | Description                                                            | Obligatoire |
| ------------- | -------------------- | ---------------------------------------------------------------------- |:-----------:|
| IDserveur     | entier               | L'ID du serveur où l'utilisateur est banni.                            |    vrai     |
| IDutilisateur | entier               | L'ID de l'utilisateur qui sera débanni.                                |    vrai     |
| raison?       | chaîne de caractères | La raison du débannissement qui sera affiché dans les logs du serveur. |    Faux     |

## Exemple(s)

Ceci va débannir un utilisateur donné :

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;IDutilisateur;Une raison de qualité.]
  `
});
```