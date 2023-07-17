---
title: '$clientID'
description: '$clientID retournera l''ID d''utilisateur Discord du client.'
id: clientID
---

`$clientID` retournera l'ID d'utilisateur Discord du client.

## Utilisation

```php
$clientID
```

## Exemple(s)

Ceci retournera l'identifiant du client :

```javascript
bot.command({
    name: 'clientID',
    code: `
  $clientID
  `
});
```