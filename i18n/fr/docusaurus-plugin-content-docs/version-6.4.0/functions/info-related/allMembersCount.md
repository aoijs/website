---
title: '$allMembersCount'
description: '$allMembersCount renvoie le nombre de membres de votre serveur.'
id: allMembersCount
---

`$allMembersCount` renvoie le nombre de membres de votre serveur.

## Utilisation

```php
$allMembersCount
```

## Exemple(s)

Cela renverra le nombre de membres dans votre serveur :

```javascript
bot.command({
    name: 'allMembersCount',
    code: `
  $allMembersCount
  `
});
```