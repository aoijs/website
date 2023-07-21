---
title: '$date'
description: '$date retournera le jour du mois.'
id: date
---

`$date` retournera le jour du mois.

## Utilisation

```php
$date
```

## Exemple(s)

Cela retournera le jour du mois, par exemple, `28` :

```javascript
bot.command({
    name: 'date',
    code: `
  $date
  `
});
```