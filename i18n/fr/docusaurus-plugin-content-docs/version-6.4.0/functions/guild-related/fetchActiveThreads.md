---
title: '$fetchActiveThreads'
description: '$fetchActiveThreads renverra tous les fils actifs d''un salon donné.'
id: fetchActiveThreads
---

`$fetchActiveThreads` renverra tous les fils actifs d'un salon donné.

## Usage

```php
$fetchActiveThreads[IDsalon;option?]
```

## Paramètres

| Champ   | Type                 | Description                                                                                    | Obligatoire |
| ------- | -------------------- | ---------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon | entier               | ID du salon don vous souhaitez récupérer tous les files actifs de celui-ci.                    |    vrai     |
| option? | chaîne de caractères | Comment renvoyer les fils actifs. <br /> 1. **name** (par défaut) <br /> 2. **id** |    faux     |

## Exemple(s)

Cela retournera tous les fils actifs, s'il y en a:

```javascript
bot.command({
    name: 'afficherFilActif',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```