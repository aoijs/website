---
title: '$awaitData'
description: '$awaitData retournera les données attendues dans les commandes attendues.'
id: awaitData
---

`$awaitData` retournera les données attendues dans les commandes attendues.

## Utilisation

```php
$awaitData[nom]
```

## Paramètres

| Champ | Type                 | Description                | Obligatoire |
| ----- | -------------------- | -------------------------- |:-----------:|
| nom   | chaîne de caractères | Nom de la donnée attendue. |    vrai     |

## Exemple(s)

Cela retournera l'ID de chaque membre du serveur et l'enverra dans votre console :

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "membres": "$membersCount" };returnMembers;]
  `
});

bot.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[$authorID est un des $awaitData[membres] membres]
  `
});
```
