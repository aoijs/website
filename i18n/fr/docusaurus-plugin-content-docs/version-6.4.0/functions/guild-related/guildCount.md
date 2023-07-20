---
title: '$guildCount'
description: '$guildCount renverra le nombre de serveurs dans lesquels le bot est.'
id: guildCount
---

`$guildCount` renverra le nombre de serveur dans lesquels le bot est.

## Utilisation

```php
$guildCount
```

## Example(s)

Cela renverra le nombre de serveurs dans lesquels votre bot est:

```javascript
bot.command({
    name: 'nombreDeServeurs',
    code: `
  Je suis dans $guildCount serveurs!
  `
});
```
