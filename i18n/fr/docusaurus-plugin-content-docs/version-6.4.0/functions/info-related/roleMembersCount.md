---
title: '$roleMembersCount'
description: '$roleMembersCount renverra le nombre de membres ayant un rôle spécifique.'
id: roleMembersCount
---

`$roleMembersCount` renverra le nombre de membres ayant un rôle spécifique.

## Utilisation

```php
$roleMembersCount[IDrôle;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDrôle     | entier | L'ID du rôle.    |    vrai     |
| IDserveur? | entier | L'ID du serveur. |    Faux     |

## Exemple(s)

Cela retournera le nombre d'utilisateurs ayant un rôle spécifique (ici $guildID est pour le rôle everyone) :

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```