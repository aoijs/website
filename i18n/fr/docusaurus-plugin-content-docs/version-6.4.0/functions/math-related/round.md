---
title: '$round'
description: '$round arrondira au nombre au nombre entier suivant.'
id: round
---

`$round` arrondira au nombre entier au nombre entier suivant.

## Utilisation

```php
$round[nombre]
```

## Paramètres

| Champ  | Type   | Description        | Obligatoire |
| ------ | ------ | ------------------ |:-----------:|
| nombre | nombre | Nombre à arrondir. |    vrai     |

## Exemple(s)

Cela renverra `555` car c'est le prochain nombre après  `555.78`:

```javascript
bot.command({
    name: 'arrondir',
    code: `
  $round[555.78]
  `
});
```