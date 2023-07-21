---
title: '$advancedTextSplit'
description: '$advancedTextSplit divisera plusieurs arguments donnés.'
id: advancedTextSplit
---

`$advancedTextSplit` divisera plusieurs arguments donnés.

## Utilisation

```php
$advancedTextSplit[texte;sép;index;sép?;index?]
```

## Paramètres

| Champ | Type                 | Description                                     | Obligatoire |
| ----- | -------------------- | ----------------------------------------------- |:-----------:|
| texte | chaîne de caractères | Texte à diviser.                                |    vrai     |
| sép   | chaîne de caractères | Séparateur utilisé pour séparer les valeurs.    |    vrai     |
| index | entier               | La position du texte que vous voulez retourner. |    vrai     |

## Exemple(s)

Cela divisera `Bonjour` de `Au revoir` et retournera `Bonjour` :

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Bonjour/Au revoir;/;1]
  `
});
```
