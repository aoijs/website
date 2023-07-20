---
title: '$interactionModal'
description: '$interactionModal crée un modal interactif.'
id: interactionModal
---

`$interactionModal` crée un modal utilisateur interactif.

## Utilisation

```php
$interactionModal[titre;IDpersonnalisé;composants]
```

## Paramètres

| Champ          | Type                 | Description                                                      | Obligatoire |
| -------------- | -------------------- | ---------------------------------------------------------------- |:-----------:|
| titre          | chaîne de caractères | Le titre du modal qui sera affichée en tant qu'en-tête du modal. |    vrai     |
| IDpersonnalisé | chaîne de caractères | L'ID personnalisé du composant.                                  |    vrai     |
| composants     | chaîne de caractères | Les composants de texte modal.                                   |    vrai     |

## Exemple(s)

Ceci créera un bouton et un modal qui enverra les données saisies au même salon et donnera une réponse éphémère à l'utilisateur qui a soumis le formulaire :

Veuillez noter que vous avez besoin de "**events: ["onMessage", "onInteractionCreate"]**" dans votre fichier principal (également connu comme, dans la plupart des cas, index.js)

```js
bot.command({
    name: "interactionModal",
    code: `

$addButton[1;Appuez moi !;primary;IDexemple;false]
bel exemple !`
}); // Créer un bouton qui va déclencher le modal.

bot.interactionCommand({
    name : "IDexemple",
    prototype: "button", // Utiliser "prototype" comme cette interaction appartient à un bouton.
    code: `
$interactionModal[Exemple!;IDpersonnalisé;
  {actionRow:
    {textInput:Quel est votre nom ?:1:entréeNom:true:Ton joli nom !:2:200}
  }
  {actionRow:
    {textInput:Quel est votre âge ?:1:entréeAge:true:Votre jeune esprit !:1:3}
  }
  {actionRow:
    {textInput:Quel est votre genre ?:2:entréeGenre:true:Tout fonctionnera !:1:10}
  }
]`
}); /* Le modal lui-même, nous utilisons {textInput} pour accepter l'entrée de l'utilisateur.

L'utilisation correcte de {textInput} serait :

{textInput:titre:type (1 : petit champ de texte, 2 : gros champ de texte):IDpersonnalisé:requis( true, false ):placeholder:valMin:valMax}

*/

bot. nteractionCommand({
    name "IDpersonnalisé",
    prototype: "modal", // Utiliser "prototype" comme cette interaction appartient à un modal.
    code : `
$interactionReply[Merci d'avoir soumis ce formulaire!;;;;everyone;true]

$title[$username a soumis un formulaire !;$userAvatar]
$addField[Leur nom est...;$textInputValue[entréeNom]]]
$addField[Leur âge est...;$textInputValue[entréeAge]]
$addField[Leur sexe est...;$textInputValue[entréeGenre]]`
}) ; /* Retourne les valeurs saisies précédemment dans la fenêtre modale. Utilisation de $textInputValue pour les récupérer.

Vous pouvez également utiliser $channelSendMessage[IDsalon;contenu] pour envoyer les données à un autre salon.
$channelSendMessage[$channelID;{newEmbed:{title:$username a soumis un formulaire !:$userAvatar}{field:Leur nom est..:$textInputValue[entréeNom]}{field:Leur âge est..:$textInputValue[entréeAge]}{field:Leur sexe est..:$textInputValue[entréeGenre]}}]
*/
```