---
title: '$deleteEmojis'
description: '$deleteEmojis supprimera plusieurs emojis.'
id: deleteEmojis
---

`$deleteEmojis` supprimera plusieurs emojis.

## Utilisation

```php
$deleteEmojis[...emojis]
```

## Paramètres

| Champ     | Type                 | Description                                                        | Obligatoire |
| --------- | -------------------- | ------------------------------------------------------------------ |:-----------:|
| ...emojis | chaîne de caractères | Nom de l'émoji, ID ou forme complète de l'émoji qui sera supprimé. |    vrai     |

## Exemple(s)

Ceci va supprimer 2 emojis aléatoirement sur votre serveur:

```javascript
bot.command({
    name: 'supprimerEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
