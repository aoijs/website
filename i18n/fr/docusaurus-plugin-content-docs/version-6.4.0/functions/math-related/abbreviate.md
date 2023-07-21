---
title: '$abbreviate'
description: '$abbreviate vous permettra d''abrévier des grands nombres.'
id: abbreviate
---

`$abbreviate` vous permettra d'abréger des grands nombres.

## Utilisation

```php
$abbreviate[nombre;décimale?]
```

## Paramètres

| Champ     | Type   | Description                 | Obligatoire |
| --------- | ------ | --------------------------- |:-----------:|
| nombre    | entier | Nombre à abréger.           |    vrai     |
| décimale? | entier | Arrondir à quelle décimale? |    faux     |

## Exemple(s)

Ceci renverra : `20k`

```javascript
bot.command({
    name: 'abrévier',
    code: `
  $abbreviate[20000]
  `
});
```

Ceci renverra : `20.0k`

```javascript
bot.command({
    name: 'abrévier',
    code: `
  $abbreviate[20000;1]
  `
});
```
