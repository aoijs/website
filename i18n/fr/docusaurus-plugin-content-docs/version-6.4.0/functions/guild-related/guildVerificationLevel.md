---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel renverra le niveau de vérification du serveur.'
id: guildVerificationLevel
---

`$guildVerificationLevel` renverra le niveau de vérification du serveur.

## Utilisation

```php
$guildVerificationLevel[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

| Type de niveau de boosts |              |
| ------------------------ | ------------ |
| 0                        | Aucun        |
| 1                        | Bas          |
| 2                        | Moyenne      |
| 3                        | Élevé        |
| 4                        | Le plus haut |

## Exemple(s)

Cela renverra le niveau de vérification du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'NiveauDeVerificationDuServeur',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
