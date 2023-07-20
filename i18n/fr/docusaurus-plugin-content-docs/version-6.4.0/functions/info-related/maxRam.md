---
title: '$maxRam'
description: '$maxRam retournera la quantité maximale de RAM du bot.'
id: maxRam
---

`$maxRam` retournera la quantité maximale de RAM du bot.

## Utilisation

```php
$maxRam
```

## Exemple(s)

Cela retournera le nombre maximum de RAM disponible sur votre bot :

```javascript
bot.command({
    name: 'maxRam',
    code: `
  $maxRam
  `
});
```
