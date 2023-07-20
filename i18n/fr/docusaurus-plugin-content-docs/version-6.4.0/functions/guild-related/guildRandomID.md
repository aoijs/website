---
title: '$guildRandomID'
description: '$guildRandomID renverra l''ID d''un serveur dans lequel votre bot est de manière aléatoire.'
id: guildRandomID
---

`$guildRandomID` renverra l'ID d'un serveur dans lequel votre bot est de manière aléatoire.

## Utilisation

```php
$guildRandomID
```

## Exemple(s)

Cela renverra un serveur dans lequel votre bot est de manière aléatoire:

```javascript
bot.command({
    name: 'ServeurIDAléatoire',
    code: `
  $guildRandomID
  `
});
```
