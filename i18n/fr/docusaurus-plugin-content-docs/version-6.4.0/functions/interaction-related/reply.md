---
title: '$reply'
description: '$reply répondra à un message donné.'
id: reply
---

`$reply` répondra à un message donné.

## Utilisation

```php
$reply[IDmessage?;mentionnerUtilisateur?]
```

## Paramètres

| Champ                  | Type    | Description                                                                                           | Obligatoire |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------- |:-----------:|
| IDmessage?             | entier  | L'ID du message auquel on répondra.                                                                   |    Faux     |
| mentionnerUtilisateur? | booléen | Mentionnez l'auteur dans la réponse? <br /> 1. **true** (par défaut)  <br /> 2. **false** |    Faux     |

## Exemple(s)

Ceci répondra à votre message de commande :

```javascript
bot.command({
    name: 'reply',
    code: `
   Bonjour!
   $reply[$messageID;true]
  `
});
```