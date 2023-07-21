---
title: '$day'
description: '$day retournera le jour du mois.'
id: day
---

`$day` retournera le jour du mois.

## Utilisation

```php
$day
```

## Exemple(s)

Cela retournera le jour du mois, par exemple, `thursday` :

```javascript
bot.command({
    name: 'day',
    code: `
  Aujourd'hui est: $day
  `
});
```