---
title: '$deleteEmoji'
description: '$deleteEmoji supprimera un emoji spécifique.'
id: deleteEmoji
---

`$deleteEmoji` supprimera un emoji spécifique.

## Utilisation

```php
$deleteEmoji[emoji]
```

## Paramètres

| Champ | Type                 | Description                                                        | Obligatoire |
| ----- | -------------------- | ------------------------------------------------------------------ |:-----------:|
| emoji | chaîne de caractères | Nom de l'émoji, ID ou forme complète de l'émoji qui sera supprimé. |     oui     |

## Exemple(s)

Ceci supprimera un emoji aléatoire de votre serveur:

```javascript
bot.command({
    name: 'supprimerEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
