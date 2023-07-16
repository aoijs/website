---
title: '$deleteIn'
description: '$deleteIn supprimera un message après un certain temps.'
id: deleteIn
---

`$deleteIn` supprimera un message après un certain temps.

## Utilisation

```php
$deleteIn[temps]
```

## Paramètres

| Champ | Type           | Description                                      | Obligatoire |
| ----- | -------------- | ------------------------------------------------ |:-----------:|
| temps | chaîne, nombre | Après combien de temps le message sera supprimé. |    vrai     |

## Exemple(s)

Ceci supprimera le message envoyé après cinq secondes:

```javascript
bot.command({
    name: 'deleteIn',
    code: `
  $deleteIn[5s]
  Je vais supprimer ce message dans 5 secondes !
  `
});
```
