---
title: '$categoryChannels'
description: '$categoryChannels renvoie tous les salons d''une catégorie donnée.'
id: categoryChannels
---

`$categoryChannels` renverra tous les salons d'une catégorie donnée.

## Utilisation

```php
$categoryChannels[IDcatégorie;option?;sép?]
```

## Paramètres

| Champ       | Type                 | Description                                                                                                                                                                       | Obligatoire |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDcatégorie | entier               | L'ID de la catégorie.                                                                                                                                                             |    vrai     |
| option ?    | chaîne de caractères | L'option dans laquelle le bot retournera les salons. <br /> 1. **names** - retourne les noms des salons (par défaut)  <br /> 2. **ids** - retourne les IDs des salons |    Faux     |
| sept?       | chaîne de caractères | Le séparateur pour séparer les salons retournés.                                                                                                                                  |    Faux     |

## Exemple(s)

Cela retournera tous les salons de la catégorie du salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```