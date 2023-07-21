---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand supprimera une commande d''application.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` supprimera une commande d'application.

## Usage

```php
$deleteApplicationCommand[IDserveur/global;ID]
```

## Paramètres

| Champ            | Type           | Description                                                                                              | Obligatoire |
| ---------------- | -------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur/global | chaîne, entier | Type de commande de l'application. <br/> 1. **global** <br/> 2. **ID spécifique de serveur** |    vrai     |
| ID               | entier         | ID de la commande d'application qui sera supprimée.                                                      |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
