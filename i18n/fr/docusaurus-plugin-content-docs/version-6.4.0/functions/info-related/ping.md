---
title: '$ping'
description: '$ping retournera la latence du bot.'
id: ping
---

`$ping` renverra la latence du bot.

## Utilisation

```php
$ping
```

## Exemple(s)

Cela retournera la latence de votre bot en  Ms :

```javascript
bot.command({
    name: 'ping',
    code: `
  Mon ping est : $pingMS!
  `
});
```
