---
title: '$databasePing'
description: '$databasePing retournera le ping de votre base de données.'
id: databasePing
---

`$databasePing` retournera le ping de votre base de données.

## Utilisation

```php
$databasePing
```

## Exemple(s)

Cela retournera votre ping de base de données :

```javascript
bot.command({
    name: 'databasePing',
    code: `
  Mon ping de base de données est : $databasePing Ms !
  `
});
```