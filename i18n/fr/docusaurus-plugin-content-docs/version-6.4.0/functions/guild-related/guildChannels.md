---
title: '$guildChannels'
description: '$guildChannels renverra tous les salons d''un serveur spécifique.'
id: guildChannels
---

`$guildChannels` renverra tous les salons d'un serveur spécifique.

## Utilisation

```php
$guildChannels[IDsalon?;option?;séparateur?]
```

## Paramètres

| Champ       | Type                 | Description                                                                                                                           | Obligatoire |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur?  | entier               | L'ID du serveur.                                                                                                                      |    faux     |
| option ?    | chaîne de caractères | L'option sur la façon de renvoyer les salons <br /> 1. **name** (par défaut) <br /> 2. **id** <br /> 3. **mention** |    faux     |
| séparateur? | chaîne de caractères | Séparateur pour séparer les salons.                                                                                                   |    faux     |

## Exemple(s)

Cela renverra tous les salons du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'salonServeur',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
