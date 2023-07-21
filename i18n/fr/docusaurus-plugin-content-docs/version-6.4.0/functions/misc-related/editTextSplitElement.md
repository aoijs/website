---
title: '$editTextSplitElement'
description: '$editTextSplitElement modifiera un élément séparé de texte spécifique.'
id: editTextSplitElement
---

`$editTextSplitElement` modifiera un élément séparé de texte spécifique.

## Utilisation

```php
$editTextSplitElement[index;texte]
```

## Paramètres

| Champ | Type                 | Description                           | Obligatoire |
| ----- | -------------------- | ------------------------------------- |:-----------:|
| index | chaîne de caractères | Index de l'élément séparé du texte.   |    vrai     |
| texte | chaîne de caractères | Nouvel élément qui remplace l'ancien. |    vrai     |

## Exemple(s)

Cela va modifier le troisième élément de texte fractionné et le changer en "Adieu" :

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Adieu]
  $textSplit[Bonjour, Au revoir, Ciao;, ]
  `
});
```