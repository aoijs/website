---
title: '$editIn'
description: '$editIn modifiera un message après un temps donné.'
id: editIn
---

`$editIn` modifiera un message après un temps donné.

## Utilisation

```php
$editIn[temps;...contenu]
```

## Paramètres

| Champ   | Type                | Description                                      | Obligatoire |
| ------- | ------------------- | ------------------------------------------------ |:-----------:|
| temps   | chaîne, nombre      | Après combien de temps le message sera édité.    |    vrai     |
| contenu | chaîne de caractère | Quel devrait être le nouveau contenu du message. |    vrai     |

## Exemple(s)

Ceci va modifier le message envoyé après cinq secondes :

```javascript
bot.command({
    name: 'editIn',
    code: `
  $editIn[5s;aoi.js est génial, n'est-ce pas ?;Oui, je suis d'accord !]
  Je vais éditer ce message dans 5 secondes!
  `
});
```
