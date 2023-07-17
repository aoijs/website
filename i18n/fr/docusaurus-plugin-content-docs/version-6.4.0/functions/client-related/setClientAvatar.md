---
title: '$setClientAvatar'
description: '$setClientAvatar changera l''avatar du client.'
id: setClientAvatar
---

`$setClientAvatar` changera l'avatar du client.

## Utilisation

```php
$setClientAvatar[URL]
```

## Paramètres

| Champ | Type                 | Description             | Obligatoire |
| ----- | -------------------- | ----------------------- |:-----------:|
| URL   | chaîne de caractères | L'URL du nouvel avatar. |    vrai     |

## Exemple(s)

Cela changera l'avatar du client en avatar de l'auteur de la commande :

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```