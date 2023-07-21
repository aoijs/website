---
title: '$clear'
description: '$clear supprimera le nombre de messages donné dans un salon.'
id: clear
---

`$clear` supprimera la quantité de messages donnée dans un salon.

## Utilisation

```php
$clear[quantité;filtre?;returnerCompte?;IDsalon?]
```

## Paramètres

| Champ            | Type                 | Description                                                                                                                                                     | Obligatoire |
| ---------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| quantité         | nombre               | Quantité de messages à supprimer.                                                                                                                               |    vrai     |
| filtre?          | chaîne de caractères | Filtre des messages à supprimer. <br /> 1. **everyone** (par défaut) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **IDutilisateur** |    Faux     |
| retournerCompte? | booléen              | Renvoie le nombre de messages supprimés. <br /> 1. **false** (par défaut) <br /> 2. **true**                                                        |    Faux     |
| IDsalon?         | entier               | Dans quel salon les messages doivent être supprimés.                                                                                                            |    Faux     |

## Exemple(s)

Ceci supprimera les cinquante derniers messages qui ne sont pas épinglés :

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
