---
title: '$math'
description: '$math retournera un résultat calculé de l''équation donné.'
id: math
---

`$math` renverra un résultat calculé de l'équation donné.

## Utilisation

```php
$math[équation]
```

## Paramètres

| Champ    | Type                 |   Description   | Obligatoire |
| -------- | -------------------- |:---------------:|:-----------:|
| équation | chaîne de caractères | Calcul (/*-+()) |    vrai     |

## Exemple(s)

Cela renverra `205` pour `15+5/2*26+(5+120)` :

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
