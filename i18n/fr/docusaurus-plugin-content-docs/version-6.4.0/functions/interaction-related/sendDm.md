---
title: '$sendDm'
description: '$sendDm enverra un message direct à un utilisateur donné.'
id: sendDm
---

`$sendDm` enverra un message direct à un utilisateur donné.

## Utilisation

```php
$sendDm[message;IDutilisateur?;retournerID?]
```

## Paramètres

| Champ          | Type                 | Description                                                                                 | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------- |:-----------:|
| message        | chaîne de caractères | Le contenu du message direct.                                                               |    vrai     |
| IDutilisateur? | chaîne de caractères | L'utilisateur qui recevra le DM.                                                            |    Faux     |
| retournerID?   | booléen              | Renvoyer l'ID du message ?  <br /> 1. **true** <br /> 2. **false** (par défaut) |    Faux     |

## Exemple(s)

Ceci enverra un DM à l'auteur de la commande :

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Bonjour !;$authorID;false]  
  `
});
```