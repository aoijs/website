---
title: '$modulo'
description: '$modulo renverra le reste d''une division donné.'
id: modulo
---

`$modulo` renverra le reste d'une divsion donné.

## Utilisation

```php
$modulo[nombre;nombre]
```

## Paramètres

| Champ  | Type   | Description                                                | Obligatoire |
| ------ | ------ | ---------------------------------------------------------- |:-----------:|
| nombre | nombre | Nombres à diviser pour trouver le reste de cette division. |    vrai     |

## Exemple(s)

Cela renverra `2` car c'est le reste de `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
