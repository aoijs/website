---
title: '$getBanReason'
description: '$getBanReason renverra une raison de bannissement d''un utilisateur spécifique.'
id: getBanReason
---

`$getBanReason` renverra une raison de bannissement d'un utilisateur spécifique.

## Utilisation

```php
$getBanReason[IDserveur?;IDutilisateur?]
```

## Paramètres

| Champ          | Type   | Description                                                               | Obligatoire |
| -------------- | ------ | ------------------------------------------------------------------------- |:-----------:|
| IDserveur?     | entier | L'ID du serveur.                                                          |    Faux     |
| IDutilisateur? | entier | L'ID de l'utilisateur dont vous voulez obtenir la raison du bannissement. |    Faux     |

## Exemple(s)

Cela renverra la raison du bannissement de qui vous voulez:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  
  $getBanReason[$guildID;IDutilisateur] 
  ` // assurez-vous de remplacer "IDutilisateur" par un véritable identifiant d'utilisateur
});
```