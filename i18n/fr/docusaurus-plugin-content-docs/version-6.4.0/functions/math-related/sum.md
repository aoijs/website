---
title: '$sum'
description: '$sum additionnera deux nombres donnés.'
id: sum
---

`$sum` additionnera deux nombres donnés.

## Utilisation

```php
$sum[nombre;nombre]
```

## Paramètres

| Champ  | Type   | Description                                  | Obligatoire |
| ------ | ------ | -------------------------------------------- |:-----------:|
| nombre | nombre | Nombres avec lesquels l'addition sera faite. |    vrai     |

## Exemple(s)

Cela renverraera `75` à `70+5` car ceci est égal à `75`:

```javascript
bot.command({
    name: 'additionner',
    code: `
  $sum[70;5]
  `
});
```