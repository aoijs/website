---
title: '$multi'
description: '$multi multipliera les nombres donnés.'
id: multi
---

`$multi` multipliera les nombres donnés.

## Utilisation

```php
$multi[nombre;nombre]
```

## Paramètres

| Champ  | Type   | Description                            | Obligatoire |
| ------ | ------ | -------------------------------------- |:-----------:|
| nombre | nombre | Numéros que vous souhaitez multiplier. |    vrai     |

## Exemple(s)

Cela renverra `72` à `8*9` car c'est le résultat de celui-ci:

```javascript
bot.command({
    name: 'multiplier',
    code: `
  $multi[8;9]
  `
});
```
