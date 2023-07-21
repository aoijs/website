---
title: '$channelCategoryID'
description: '$channelCategoryID renvoie le parent d''un salon spécifique.'
id: channelCategoryID
---

`$channelCategoryID` retournera le parent d'un salon spécifique.

## Utilisation

```php
$channelCategoryID[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                          | Obligatoire |
| -------- | ------ | ---------------------------------------------------- |:-----------:|
| IDsalon? | entier | ID d'un salon dont vous voulez récupérer son parent. |    Faux     |

## Exemple(s)

Cela retournera l'ID de la catégorie du salon textuel où vous exécutez la commande :

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```