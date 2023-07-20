---
title: '$guildFeatures'
description: '$guildFeatures renverra les fonctionnalités débloquées du serveur.'
id: guildFeatures
---

`$guildFeatures` renverra les fonctionnalités débloquées du serveur.

## Utilisation

```php
$guildFeatures[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra les fonctionnalitées débloquées de votre serveur:

```javascript
bot.command({
    name: 'serveurFonctionnalitées',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
