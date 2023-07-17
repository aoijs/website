---
title: '$createThread'
description: '$createThread créera un nouveau fil.'
id: createThread
---

`$createThread` créera un nouveau fil.

## Utilisation

```php
$createThread[IDsalon;nom;archive;type;premierMessage;renvoyerID?]
```

## Paramètres

| Champ          | Type                 | Description                                                                     | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------------------------------------- |:-----------:|
| IDsalon        | entier               | L'ID du salon où le fil doit être créé.                                         |    vrai     |
| nom            | chaine de caractères | Le nom du fil nouvellement créé.                                                |    vrai     |
| archive        | chaine de caractères | Après combien de temps le fil de discussion sera archivé (ms).                  |    vrai     |
| type           | chaîne de caractères | Type de fil <br /> 1. **public** (par défaut) <br /> 2. **private** |    vrai     |
| premierMessage | chaine de caractères | L'ID du message où le fil sera créé.                                            |    vrai     |
| renvoyerID?    | chaîne de caractères | Si la fonction renvoie l'identifiant du fil après sa création.                  |    faux     |

* **60 —** Cette option rend le fil actif pendant **1 heure**.
* **1440 —** Cette option rend le fil actif pendant **1 jour**.
* **4320 —** Cette option rend le fil actif pendant **3 jours**.
* **10080 —** Cette option rend le fil actif pendant **1 semaine**.
* **MAX —** Cette option rend le fil actif pendant le plus lontemp possible.

## Exemple(s)

Ceci va créer un fil dans le salon actuel:

```javascript
bot.command({
    name: 'créerFil',
    code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `
});
```
