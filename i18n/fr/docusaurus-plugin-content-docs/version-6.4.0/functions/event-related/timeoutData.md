---
title: '$timeoutData'
description: '$timeoutData contient des données pour les paramètres de données $setTimeout, cela sera vide si utilisé en dehors des commandes timeoutCommand.'
id: timeoutData
---

`$timeoutData` contient des données pour les paramètres de données $setTimeout, cela sera vide si utilisé en dehors des commandes timeoutCommand.

## Utilisation

```php
$timeoutData[option]
```

## Paramètres

| Champ  | Type                 | Description                              | Obligatoire |
| ------ | -------------------- | ---------------------------------------- |:-----------:|
| option | chaîne de caractères | Nom de l'option de la donnée du timeout. |    vrai     |

## Exemple(s)

Cela enverra "Bonjour !" après 10 secondes dans le salon d'exécution de la commande :

```javascript
bot.command({
    name: "setTimeout",
    code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

bot.timeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID];Bonjour, <@$timeoutData[authorID]>!]
    `
});
```