---
title: '$truncate'
description: '$truncate supprimera tous les chiffres après un point décimal.'
id: truncate
---

`$truncate` supprimera tous les chiffres après un point décimal.

## Utilisation

```php
$truncate[nombre]
```

## Paramètres

| Champ  | Type   | Description                                                  | Obligatoire |
| ------ | ------ | ------------------------------------------------------------ |:-----------:|
| nombre | nombre | Nombre à supprimer tous les chiffres après le point décimal. |    vrai     |

## Exemple(s)

Cela renverra `775` et supprimera `.9723` du nombre donné:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```