---
title: '$isAutoComplete'
description: '$isAutoComplete retournera soit true soit false selon que l''option de la commande slash entrée est automatiquement complétée ou non. (fonction autoCompleteRespond)'
id: isAutoComplete
---

`$isAutoComplete` renverra soit true soit false selon que l'option de la commande slash entrée est automatiquement complétée ou non. (fonction autoCompleteRespond)

## Utilisation

```php
$isAutoComplete
```

## Exemple(s)

Cela va créer une commande slash avec la fonction "autoComplete" :

Veuillez noter que vous avez besoin de "**events: ["onMessage", "onInteractionCreate"]**" dans votre fichier principal (également connu comme, dans la plupart des cas, index.js)

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
}]]`
});
```

Vérification si autoComplete équivaut à `true`, si c'est le cas, il répondra avec la réponse donnée (ajout du code ci-dessus) :

```javascript
bot.command({
    name : "exemple",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[Première option;Vous avez choisi la première option, donc je réponds avec ceci;Seconde option;Vous avez choisi la seconde option, donc je réponds avec ceci]
  $else
  $interactionReply[$slashOption[option];;;everyone]
  $endif
  `
});
```

Crée les commandes slash avec une autre option :

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  
  $createApplicationCommand[global;exemple;Super exemple de commande slash avec auto-complétion !;true;slash; {
  "name": "option",
  "description": "test",
  "required": false, 
  "type": 3,
  "autocomplete": vrai 
}, {
  "name": "autreoption",
  "description": "test",
  "required": false,
  "type": 3
}]]`
});
```

Utiliser JSON et vérifier si autoComplete équivaut à `true`, si oui, il répondra avec la réponse donnée (ajout du code ci-dessus) :

```javascript
bot.command({
    name : "exemple",
    prototype: "slash",
    $if: "old",
    code : `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "nome" : "Première option",
    "valeur" : "Vous avez sélectionné la première option, je réponds donc avec cela !"
  }, {
    "name" : "Second Option",
    "value" : "Vous avez sélectionné la deuxième option, je réponds donc avec ceci!"
  }]]
  $else
  $interactionReply[$slashOption[option] - autocomplétion #SEMI# $slashOption[autreoption] - fausse auto-complétion;;;;everyone]
  $endif
  `
});
```