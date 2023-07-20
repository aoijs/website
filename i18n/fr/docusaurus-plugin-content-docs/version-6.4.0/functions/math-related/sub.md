---
title: '$sub'
description: '$sub soustraira deux nombres donnés.'
id: sub
---

`$sub` soustraira deux nombres donnés.

## Utilisation

```php
$sub[nombre;nombre]
```

## Paramètres

| Champ  | Type   | Description                                          | Obligatoire |
| ------ | ------ | ---------------------------------------------------- |:-----------:|
| nombre | nombre | Numéros avec lesquels la soustraction sera effectué. |    vrai     |

## Exemple(s)

Cela renverra `65` à `70-5` car c'est égal à `65`:

```javascript
bot.command({
    name: 'soustraire',
    code: `
  $sub[70;5]
  `
});
```