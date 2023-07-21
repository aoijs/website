---
title: '$deleteChannels'
description: '$deleteChannels supprime plusieurs salons.'
id: deleteChannels
---

`$deleteChannels` supprimera plusieurs salons.

## Utilisation

```php
$deleteChannels[...salons]
```

## Paramètres

| Champ     | Type   | Description                                     | Obligatoire |
| --------- | ------ | ----------------------------------------------- |:-----------:|
| ...salons | entier | L'es IDs des salons qui devront être supprimés. |    vrai     |

## Exemple(s)

Ceci supprimera plusieurs salons, assurez-vous de remplacer les arguments:

```javascript
bot.command({
    name: 'supprimerSalons',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
