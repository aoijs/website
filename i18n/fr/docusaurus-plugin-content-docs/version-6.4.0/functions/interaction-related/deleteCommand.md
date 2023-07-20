---
title: '$deleteCommand'
description: '$deleteCommand supprimera le message de commande initial.'
id: deleteCommand
---

`$deleteCommand` supprimera le message de commande initial.

## Utilisation

```php
$deleteCommand
```

## Exemple(s)

Ceci supprimera le message initial de la commande :

```javascript
bot.command({
    name: 'deleteCommand',
    code: `
  Bonjour !
  $deleteCommand
  `
});
```
