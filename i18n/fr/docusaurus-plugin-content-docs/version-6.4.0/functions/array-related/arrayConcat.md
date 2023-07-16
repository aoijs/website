---
title: '$arrayConcat'
description: '$arrayConcat permet de concaténer plusieurs tableaux.'
id: arrayConcat
---

`$arrayConcat` permet de concaténer plusieurs tableaux.

## Utilisation

```php
$arrayConcat[séparateur;...tableaux]
```

## Paramètres

| Champ       | Type                 | Description     | Obligatoire |
| ----------- | -------------------- | --------------- |:-----------:|
| séparateur  | chaîne de caractères | Séparateur.     |    vrai     |
| ...tableaux | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

Ceci retournera `Ceci est un test` car il concatène les tableaux 1 et 2 :

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;tableau1;tableau2]
  $createArray[tableau1;Ceci est]
  $createArray[tableau2;un test]
  `
});
```