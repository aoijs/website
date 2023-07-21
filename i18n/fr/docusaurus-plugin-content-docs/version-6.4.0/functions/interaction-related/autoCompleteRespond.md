---
title: '$autoCompleteRespond'
description: '$autoCompleteRespond est utilisé pour compléter automatiquement les options de commandes slash.'
id: autoCompleteRespond
---

`$autoCompleteRespond` est utilisé pour compléter automatiquement les options de commandes slash.

## Utilisation

```php
$autoCompleteRespond[objet]
```

```php
$autoCompleteRespond[nomOption;réponseOption;...]
```

## Paramètres

| Champ         | Type                 | Description                                                                                                        | Obligatoire |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ |:-----------:|
| nomOption     | chaîne de caractères | Nom de l'option de saisie automatique qui sera affichée à l'utilisateur.                                           |    vrai     |
| réponseOption | chaîne de caractères | La réponse qui sera envoyée si l'option de saisie automatique a été sélectionnée, (non visible par l'utilisateur). |    vrai     |

## Exemple(s)

Créez les commandes slash : (veuillez noter que vous avez besoin de `events: ["onMessage", "onInteractionCreate"]` dans votre fichier principal)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  
  $createApplicationCommand[global;exemple;Super exemple de commande slash avec auto-complétion !;true;slash; {
  "name": "option",
  "description": "test",
  "required": false,
  "type": 3,
  "autocomplete": true
}]
  `
});
```

Commande d'interaction :

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[Première option;Vous avez choisi la première option, c'est pourquoi je réponds par ceci !;Seconde option;Vous avez choisi la seconde option, c'est pourquoi je réponds par ceci !]
  $else
  $interactionReply[$slashOption[option];;;everyone]
  $endif
  `
});
```

### Exemple Avancé

Créez les commandes slash : (veuillez noter que vous avez besoin de `events: ["onMessage", "onInteractionCreate"]` dans votre fichier principal)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  
  $createApplicationCommand[global;exemple;Super exemple de commande d'interaction avec auto-complétion !;true;slash; {
  "name": "option",
  "description": "test",
  "required": false,
  "type": 3,
  "autocomplete": true
}, {
  "name": "autreoption",
  "description": "test",
  "required": false,
  "type": 3
}]
  `
});
```

Commande d'interaction :

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    $if: "old",
    code : `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "Première option",
    "valeur" : "Vous avez sélectionné la première option, je réponds donc avec cela !"
  }, {
    "name" : "Seconde Option",
    "value" : "Vous avez sélectionné la deuxième option, je réponds donc avec ceci !"
  }]]
  $else
  $interactionReply[$slashOption[option] - autocomplétion #SEMI# $slashOption[anotheroption] - fausse auto-complétion;;;;everyone]
  $endif
  `
});
```
