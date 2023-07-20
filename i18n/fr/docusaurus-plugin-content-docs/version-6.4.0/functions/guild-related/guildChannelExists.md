---
title: '$guildChannelExists'
description: '$guildChannelExists vérifiera dans une guilde donnée si le salon donné existe.'
id: guildChannelExists
---

`$guildChannelExists` vérifiera dans une guilde donnée si le salon donné existe.

## Utilisation

```php
$guildChannelExists[IDserveur;salonDevantÊtreVérifier]
```

## Paramètres

| Champ                   | Type                         | Description                                                 | Obligatoire |
| ----------------------- | ---------------------------- | ----------------------------------------------------------- |:-----------:|
| IDserveur               | entier                       | ID du serveur dans lequel le salon donné doit être vérifié. |    vrai     |
| salonDevantÊtreVérifier | entier, chaîne de caractères | ID ou nom du salon à vérifier.                              |    vrai     |

## Exemple(s)

Cela vérifiera si un salon avec le nom `règles` existe dans le serveur, vous pouvez également utiliser un ID à la place:

```javascript
bot.command({
    name: 'salonExistant',
    code: `
  $guildChannelExists[$guildID;règles]
  `
});
```
