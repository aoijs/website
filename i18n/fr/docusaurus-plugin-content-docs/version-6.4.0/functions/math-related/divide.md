---
title: '$divide'
description: '$divide divisera deux nombres donnés.'
id: divide
---

`$divide` divisera deux nombres donnés.

## Utilisation

```php
$divide[...nombres;...nombres]
```

## Paramètres

| Champ      | Type   | Description                                           | Obligatoire |
| ---------- | ------ | ----------------------------------------------------- |:-----------:|
| ...nombres | nombre | Nombre que vous souhaitez diviser aux autres nombres. |    vrai     |

## Exemple(s)

Ceci renverra `23` pour `69/3` :

```javascript
bot.command({
    name: 'diviser',
    code: `
  $divide[69;3]
  `
});
```
