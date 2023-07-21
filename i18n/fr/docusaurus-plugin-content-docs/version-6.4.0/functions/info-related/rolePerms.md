---
title: '$rolePerms'
description: '$rolePerms retournera toutes les autorisations données à un rôle.'
id: rolePerms
---

`$rolePerms` renverra toutes les permissions données à un rôle.

## Utilisation

```php
$rolePerms[IDrôle;sép?;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                           | Obligatoire |
| ---------- | ------ | ----------------------------------------------------- |:-----------:|
| IDrôle     | entier | L'ID du rôle.                                         |    vrai     |
| sép?       | entier | Séparateur pour séparer plusieurs valeurs retournées. |    Faux     |
| IDserveur? | entier | L'ID du serveur.                                      |    Faux     |

## Exemple(s)

Cela retournera les permissions pour le rôle `@everyone` :

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
