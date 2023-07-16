---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds retournera les serveurs mutuels avec un utilisateur donné et le bot.'
id: clientMutualGuilds
---

`$clientMutualGuilds` retournera les serveurs mutuels avec un utilisateur donné et le bot.

## Utilisation

```php
$clientMutualGuilds[IDutilisateur?;sép?]
```

## Paramètres

| Champ          | Type                | Description                                        | Obligatoire |
| -------------- | ------------------- | -------------------------------------------------- |:-----------:|
| IDutilisateur? | entier              | L'identifiant de l'utilisateur.                    |    faux     |
| sép?           | chaîne de caractère | Le séparateur pour séparer les valeurs retournées. |    faux     |

## Exemple(s)

Ceci retournera les serveurs mutuels de vous et du bot :

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
