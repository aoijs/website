---
title: '$clientToken'
description: '$clientToken retournera le token du client.'
id: clientToken
---

`$clientToken` retournera le token du client.

## Utilisation

```php
$clientToken
```

> ** ⚠️ Vous ne devriez jamais partager votre token de bot Discord avec quiconque.**

## Exemple(s)

Ceci retournera le token du client :

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```