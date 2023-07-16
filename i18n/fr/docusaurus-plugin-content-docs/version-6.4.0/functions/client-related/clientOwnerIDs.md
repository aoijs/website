---
title: '$clientOwnerIDs'
description: '$clientOwnerIDs retournera l''identifiant d''utilisateur du propriétaire du bot (ou de plusieurs personnes si vous avez une équipe).'
id: clientOwnerIDs
---

`$clientOwnerIDs` retournera l'identifiant d'utilisateur du propriétaire du bot (ou de plusieurs personnes si vous avez une équipe).

## Utilisation

```php
$clientOwnerIDs[séparateur?]
```

## Paramètres

| Champ       | Type                 | Description                                                                | Obligatoire |
| ----------- | -------------------- | -------------------------------------------------------------------------- |:-----------:|
| séparateur? | chaîne de caractères | Séparateur pour séparer les identifiants d'utilisateur. (Par défaut : `,`) |    faux     |

## Exemple(s)

Ceci retournera votre identifiant utilisateur (dans une grande partie des cas) :

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```
