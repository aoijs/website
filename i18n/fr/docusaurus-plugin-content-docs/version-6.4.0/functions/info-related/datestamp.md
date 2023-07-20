---
title: '$datestamp'
description: '$datestamp retournera la date en Ms.'
id: datestamp
---

`$datestamp` retournera la date en Ms.

## Utilisation

```php
$datestamp
```

## Exemple(s)

Cela retournera le jour du mois, en Ms (nous utilisons $humanizeMS pour le rendre lisible):

```javascript
bot.command({
    name: 'datestamp',
    code: `
  $humanizeMS[$datestamp]
  `
});
```