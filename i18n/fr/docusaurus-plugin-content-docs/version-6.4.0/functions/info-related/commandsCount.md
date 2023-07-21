---
title: '$commandsCount'
description: '$commandsCount retournera le nombre de commandes.'
id: commandsCount
---

`$commandsCount` retournera le nombre de commandes.

## Utilisation

```php
$commandsCount
```

## Exemple(s)

Cela retournera le nombre de commandes de votre bot :

```javascript
bot.command({
    name: 'commandsCount',
    code: `
  $commandsCount
  `
});
```