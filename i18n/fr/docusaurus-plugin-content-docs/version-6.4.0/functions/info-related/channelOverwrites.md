---
title: '$channelOverwrites'
description: '$channelOverwrites retournera les réécritures du salon donné.'
id: channelOverwrites
---

`$channelOverwrites` retournera les réécritures du salon donné.

## Utilisation

```php
$channelOverwrites[IDsalon?;réponse?;sép?]
```

## Paramètres

| Champ    | Type                 | Description                                                                  | Obligatoire |
| -------- | -------------------- | ---------------------------------------------------------------------------- |:-----------:|
| IDsalon? | entier               | ID du salon dont vous voulez obtenir les réécritures.                        |    Faux     |
| réponse? | chaîne de caractères | Le format dans lequel les réécritures du salon seront retournées.            |    Faux     |
| sép?     | chaîne de caractères | Le séparateur pour séparer les multiples réécritures, s'il y en a plusieurs. |    Faux     |

| Type de texte | Sortie                               |
|:-------------:| ------------------------------------ |
|  `{mention}`  | Mentionne le rôle ou l'utilisateur   |
|   `{type}`    | Renvoie le type, utilisateur ou rôle |
|   `{allow}`   | The granted permissions              |
|   `{deny}`    | Les permissions refusées             |

## Exemple(s)

Cela retournera les réécritures du salon dans lequel vous exécutez la commande :

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```