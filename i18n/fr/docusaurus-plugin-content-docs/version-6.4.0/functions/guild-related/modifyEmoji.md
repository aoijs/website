---
title: '$modifyEmoji'
description: '$modifyEmoji va modifier un emoji personnalisé donné.'
id: modifyEmoji
---

`$modifyEmoji` va modifier un émoji personnalisé donné.

## Utilisation

```php
$modifyEmoji[IDserveur;IDemoji;nom;...rôles?]
```

## Paramètres

| Champ      | Type                 | Description                                          | Obligatoire |
| ---------- | -------------------- | ---------------------------------------------------- |:-----------:|
| IDserveur  | entier               | L'ID du serveur où se trouve l'emoji.                |    vrai     |
| IDemoji    | entier               | L'ID de l'emoji.                                     |    vrai     |
| nom        | chaîne de caractères | Le nouveau nom de l'émoji.                           |    vrai     |
| ... rôles? | entier               | Les rôles qui seront en mesure d'utiliser cet emoji. |    faux     |

## Exemple(s)

Ceci va modifier un émoji existant / changer son nom en "Exemple":

```javascript
bot.command({
    name: 'modiferEmoji',
    code: `
  $modifyEmoji[$guildID;IDemoji;Exemple]
  `
});
```
