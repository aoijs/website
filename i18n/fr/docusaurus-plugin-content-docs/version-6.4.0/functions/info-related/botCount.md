---
title: $botCount
description: '$guildBotCount renvoie le nombre de Bots dans votre serveur.'
id: botCount
---

`$guildBotCount` renverra la quantité de Bots dans votre serveur.

## Usage

```php
$guildBotCount[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                                | Obligatoire |
| ---------- | ------ | ---------------------------------------------------------- |:-----------:|
| IDserveur? | entier | ID du serveur que vous voulez récupérer le nombre de bots. |    Faux     |

## Exemple(s)

Cela retournera le nombre de bots dans votre guilde :

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```