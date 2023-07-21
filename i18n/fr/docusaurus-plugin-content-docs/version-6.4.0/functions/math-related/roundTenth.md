---
title: '$roundTenth'
description: '$roundTenth arrondira à la décimale donnée.'
id: roundTenth
---

`$roundTenth` arrondira à la décimale donnée.

## Utilisation

```php
$roundTenth[nombre;positionDécimale]
```

## Paramètres

| Champ            | Type   | Description                                                 | Obligatoire |
| ---------------- | ------ | ----------------------------------------------------------- |:-----------:|
| nombre           | nombre | Nombre à arrondir.                                          |    vrai     |
| positionDécimale | entier | Combien de nombres après la virgule le nombre sera arrondi. |    vrai     |

## Exemple(s)

Cela retournera `503.70` car c'est le nombre le plus proche de `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```