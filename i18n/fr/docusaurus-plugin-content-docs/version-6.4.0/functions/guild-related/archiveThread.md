---
title: '$archiveThread'
description: '$archiveThread archivera ou désarchivera un fil spécifique.'
id: archiveThread
---

`$archiveThread` archivera ou désarchivera un fil spécifique.

## Utilisation

```php
$archiveThread[IDfil;IDsalon?;archiver?;raison?]
```

## Paramètres

| Champ     | Type                 | Description                                        | Obligatoire |
| --------- | -------------------- | -------------------------------------------------- |:-----------:|
| IDfil     | entier               | ID du fil.                                         |    vrai     |
| IDsalon?  | entier               | ID du salon où se trouve le fil.                   |    faux     |
| archiver? | booléen              | Archiver le fil de discussion donné ?              |    faux     |
| raison?   | chaîne de caractères | Raison qui sera affichée dans les logs du serveur. |    faux     |

## Exemple(s)

Ceci va archiver le fil créé :

```javascript
bot.command({
    name: 'archiverFil',
    code: `
  $archiveThread[$channelID;$get[id];true;test]
  $let[id;$createThread[$channelID;exemple;1440;public;$messageID;true]]  
  `
});
```
