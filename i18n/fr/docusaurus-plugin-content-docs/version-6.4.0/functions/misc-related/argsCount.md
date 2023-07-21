---
title: '$argsCount'
description: '$argsCount retournera le montant des arguments donnés.'
id: argsCount
---

`$argsCount` renverra le montant des arguments donnés.

## Utilisation

```php
$argsCount
```

## Exemple(s)

Cela retournera le nombre d'arguments dans votre message, par exemple, `[prefix]argsCount Bonjour Bye` retournera deux:

```javascript
bot.command({
    name: 'argsCount',
    code: `
  $argsCount
  `
});
```
