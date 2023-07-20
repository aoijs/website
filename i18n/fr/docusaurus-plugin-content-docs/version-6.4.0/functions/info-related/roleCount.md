---
title: '$roleCount'
description: '$roleCount renverra le nombre de rôles du serveur.'
id: roleCount
---

`$roleCount` renverra le nombre de rôles du serveur.

## Utilisation

```php
$roleCount[IDserveur?;récupérerD'abord?]
```

## Paramètres

| Champ             | Type    | Description                                                                                                         | Obligatoire |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur?        | entier  | L'ID du serveur.                                                                                                    |    Faux     |
| récupérerD'abord? | booléen | Récupérer les rôles avant de retourner le nombre ?  <br /> 1. **true** <br /> 2. **false** (par défaut) |    Faux     |

## Exemple(s)

Cela retournera le nombre de rôles dans votre serveur :

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```