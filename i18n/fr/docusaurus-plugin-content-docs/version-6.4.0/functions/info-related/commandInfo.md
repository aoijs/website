---
title: '$commandInfo'
description: '$commandInfo renverra le texte d''une propriété donnée.'
id: commandInfo
---

`$commandInfo` renverra le texte d'une propriété donnée.

## Utilisation

```php
$commandInfo[nom;option]
```

## Paramètres

| Champ  | Type                 | Description                  | Obligatoire |
| ------ | -------------------- | ---------------------------- |:-----------:|
| nom    | chaîne de caractères | Nom ou alias de la commande. |    vrai     |
| option | chaîne de caractères | Propriété à récupérer.       |    vrai     |

## Exemple(s)

Ceci retournera l'utilisation (définie par les propriétés ajoutées) de la commande :

* Vous pouvez ajouter tout ce que vous voulez, par exemple "usage" comme ci-dessous.
* Vous pouvez utiliser des alias ou le nom de la commande pour retourner ses informations.

```javascript
bot.command({
    name: 'commandInfo',
    aliases: ["ci", "cmdInfo"],
    usage: "commandInfo [command]",
    code: `
  Utilisation: $commandInfo[ci;usage]
  `
});
```