---
title: '$customEmoji'
description: '$customEmoji retournera un émoji personnalisé.'
id: customEmoji
---

`$customEmoji` retournera un émoji personnalisé.

## Utilisation

```php
$customEmoji[résolveurD'émoji;IDserveur?]
```

## Paramètres

| Champ            | Type                 | Description                                                                                                           | Obligatoire |
| ---------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------- |:-----------:|
| résolveurD'émoji | chaîne de caractères | Nom ou ID de l'émoji.                                                                                                 |    vrai     |
| IDserveur?       | chaîne, entier       | D'où vient l'émoji. <br /> 1. **global** <br /> 2. **IDserveur** - remplacer par un ID valide de serveur. |    Faux     |

## Exemple(s)

Ceci envoie un émoji personnalisé de votre choix, remplacez le "résolveurD'émoji" par un nom ou un ID réel d'émoji :

Tente de rechercher les émojis dans tous les serveurs où le bot est :
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[résolveurD'émoji;global]
  `
});
```

Tente de renvoyer l'émoji du serveur donné :
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[résolveurD'émoji;ID de serveur spécifique]
  `
});
```