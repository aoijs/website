---
title: '$clientLeave'
description: '$clientLeave fera que votre bot quitte un serveur spécifique.'
id: clientLeave
---

`$clientLeave` fera que votre bot quitte un serveur spécifique.

## Utilisation

```php
$clientLeave[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                 | Obligatoire |
| ---------- | ------ | ------------------------------------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur que votre bot doit quitter. |    faux     |

## Exemple(s)

Cela fera que votre bot quittera le serveur actuel :

```javascript
bot.command({
    name: 'clientLeave',
    code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Au revoir, je m'en vais !]
  `
});
```
