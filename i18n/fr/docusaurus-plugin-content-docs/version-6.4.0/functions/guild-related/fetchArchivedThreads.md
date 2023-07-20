---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads renverra tous les fils archivés d''un salon donné.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` renverra tous les fils archivés d'un salon donné.

## Utilisation

```php
$fetchArchivedThreads[IDsalon;option?]
```

## Paramètres

| Champ   | Type                 | Description                                                                                          | Obligatoire |
| ------- | -------------------- | ---------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon | entier               | ID du salon dont vous souhaitez récupérer les fils archivés.                                         |    vrai     |
| option? | chaîne de caractères | Comment retourner les threads archivés. <br /> 1. **name** (par défaut) <br /> 2. **id** |    faux     |

## Exemple(s)

Cela retournera tous les fils archivés du salon actuel, s'il y en a:

```javascript
bot.command({
    name: 'afficherFilArchivé',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```
