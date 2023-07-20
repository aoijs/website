---
title: '$addSelectMenu'
description: '$addSelectMenu ajoutera un menu de sélection au message du bot.'
id: addSelectMenu
---

`$addSelectMenu` ajoutera un menu de sélection au message du bot.

## Utilisation

```php
$addSelectMenu[index;IDpersonnalisé;placeHolder;valeursMin;valeursMax;désactivé?;étiquette:description:valeur:défaut?:émoji?;...]
```

## Paramètres

| Champ          | Type de texte        | Libellé                                                                                                         | Requis |
| -------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |:------:|
| index          | entier               | Dans quelle ligne le menu de sélection apparaît, un menu de sélection nécessite une ligne entière.              |  vrai  |
| IDpersonnalisé | chaîne de caractères | L'ID personnalisé du composant.                                                                                 |  vrai  |
| placeHolder    | chaîne de caractères | Placeholder du menu de sélection.                                                                               |  vrai  |
| valeursMin     | entier               | Nombre de valeurs minimales des options sélectionnables.                                                        |  vrai  |
| valeursMax     | entier               | Nombre de valeurs maximales des options sélectionnables.                                                        |  vrai  |
| désactivé      | booléen              | Si le menu déroulant apparaît comme désactivé - <br /> 1. **true** <br /> 2. **false** (par défaut) |  vrai  |
| Options        | chaîne de caractères | Les options du menu de sélection séparées les une des autres par `;` et `:`.                                    |  vrai  |

## Exemple(s)

Ceci ajoute un menu de sélection avec deux fonctions :

```javascript
bot.command({
    name: "add-select-menu",
    code: `
  Sélectionnez une option.

  $addSelectMenu[1;votreIDpersonnalisé;Ceci est un placeholder!;1;1;false;Option A:Description de l'option A:autreIDpersonnalisé:false;Option B:Description de l'option B:encoreUnIDpersonnalisé:true]
  `
});

bot.interactionCommand({
    name: "votreIDpersonnalisé",
    prototype: "selectMenu",
    code: `
  $interactionReply[Bonjour ! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==autreIDpersonnalisé;]
  `
});

bot.interactionCommand({
    name: "votreIDpersonnalisé",
    prototype: "selectMenu",
    code: `
  $interactionReply[Bonjour ! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==encoreUnIDpersonnalisé;]
  `
});

/* 
Nous utilisons "$onlyIf[$interactionData[values[0]]==IDpersonnalisé;]" pour nous assurer que cela sera déclenché uniquement pour l'option sélectionnée.

Assurez-vous également que vous avez l'événement "onInteractionCreate" dans votre fichier principal (index.js dans la plupart des cas).
*/
```

Exemple avec un handler :

```js
module.exports = [{
    name: "add-select-menu",
    code: `
     Sélectionnez une option.
     $addSelectMenu[1;votreIDpersonnalisé;Ceci est un placeholder!;1;1;false;Option A:Description de l'option A:autreIDpersonnalisé:false;Option B:Description de l'option B:encoreUnIDpersonnalisé:true]
  `
}, {
    nom: "votreIDpersonnalisé",
    type: "interaction", // clarifiant que cette commande est un prototype d'interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Bonjour! :);;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==autreIDpersonnalisé; `
}, {
    name : "votreIDpersonnalisé",
    type: "interaction", // clarifiant que cette commande est un prototype d'interaction
    prototype: "selectMenu",
    code : `
     $interactionReply[Au revoir ! :(;;;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==encoreUnIDpersonnalisé;]`
}]
```