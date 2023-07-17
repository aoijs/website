---
title: '$deleteSticker'
description: '$deleteSticker supprimera un autocollant donné.'
id: deleteSticker
---

`$deleteSticker` supprimera un autocollant donné.

## Utilisation

```php
$deleteSticker[IDserveur;autocollant]
```

## Paramètres

| Champ       | Type                 | Description                                 | Obligatoire |
| ----------- | -------------------- | ------------------------------------------- |:-----------:|
| IDserveur   | entier               | L'ID du serveur où se trouve l'autocollant. |     oui     |
| autocollant | chaine de caractères | Le nom de l'autocollant.                    |    true     |

## Exemple(s)

Ceci va supprimer un autocollant de votre serveur (assurez-vous de fournir un vrai nom d'autocollant):

```javascript
bot.command({
    name: 'supprimerAutocollant',
    code: `
  $deleteSticker[$guildID;autocollant]
  `
});
```