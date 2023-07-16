---
title: '$slashOption'
description: '$slashOption retourne les données d''une option de commande slash.'
id: slashOption
---

`$slashOption` retourne les données d'une option de commande slash.

## Utilisation

```php
$slashOption[option]
```

## Paramètres

| Champ  | Type                 | Description      | Obligatoire |
| ------ | -------------------- | ---------------- |:-----------:|
| option | chaîne de caractères | Nom de l’option. |    vrai     |

## Exemple(s)

```javascript
$createApplicationCommand[global;exempleslash;Exemple simple de commande slash.;true;slash;[{
    "name": "exempleOption",
    "description": "exemple d'une option de commande slash",
    "required": true,
    "type": 3
}]]
```

```javascript
bot.command({
    name: 'exempleslash',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[Quel bel exemple ! Vous avez entré $slashOption[exempleOption] !]`
});
```