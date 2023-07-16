---
title: '$setClientName'
description: '$setClientName changera le nom d''utilisateur discord du client.'
id: setClientName
---

`$setClientName` changera le nom d'utilisateur discord du client.

## Utilisation

```php
$setClientName[username]
```

## Paramètres

| Champ             | Type                 | Description                             | Obligatoire |
| ----------------- | -------------------- | --------------------------------------- |:-----------:|
| nom d'utilisateur | chaîne de caractères | Le nouveau nom d'utilisateur du client. |    vrai     |

## Exemple(s)

Cela changera l'avatar du client en l'avatar de l'auteur de la commande :

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```