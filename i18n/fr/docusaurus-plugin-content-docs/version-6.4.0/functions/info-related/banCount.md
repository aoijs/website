---
title: '$banCount'
description: '$banCount renverra le nombre d''utilisateurs bannis d''un serveur spécifique.'
id: banCount
---

`$banCount` renverra le nombre d'utilisateurs bannis d'un serveur spécifique.

## Utilisation

```php
$banCount[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                                               | Obligatoire |
| ---------- | ------ | ------------------------------------------------------------------------- | ----------- |
| IDserveur? | entier | ID du serveur dont vous voulez récupérer le nombre d'utilisateurs bannis. | Faux        |

#### Veuillez noter que votre bot nécessite des autorisations pour `VIEW_AUDIT_LOG`

## Exemple(s)

Cela renverra le nombre d'utilisateurs bannis dans votre guilde :

```javascript
bot.command({
    name: 'banCount',
    code: `
  $banCount
  `
});
```