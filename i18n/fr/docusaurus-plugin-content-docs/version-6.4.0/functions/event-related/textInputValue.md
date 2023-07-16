---
title: '$textInputValue'
description: '$textInputValue retourne les données d''une option de menu contextuel.'
id: textInputValue
---

`$textInputValue` retourne les données d'une option de menu contextuel.

## Utilisation

```php
$textInputValue[option]
```

## Paramètres

| Champ  | Type                 | Description                                       | Obligatoire |
| ------ | -------------------- | ------------------------------------------------- |:-----------:|
| option | chaîne de caractères | Option <br /> 1. **name** - Nom de l'option |    vrai     |

## Exemple(s)

Ceci créera un bouton et un modal qui enverra les données saisies au même salon et donnera une réponse éphémère à l'utilisateur qui a soumis le formulaire :

Veuillez noter que vous avez besoin de "**événements : ["onMessage", "onInteractionCreate"]**" dans votre fichier principal (également connu comme, dans la plupart des cas, index.js)

```js
bot.command({
    name: "interactionModal",
    code: `

$addButton[1;Appuyez-moi !;primary;IDexemple;false]
Incroyable exemple !`
}); // Créer un bouton qui va déclencher le modal.

bot.interactionCommand({
    name: "IDexemple",
    prototype: "button",  // Utilisation de "prototype" car cette interaction appartient à un bouton.
    code : `
$interactionModal[Example!;IDpersonnalisé;
  {actionRow :
    {textInput:Quel est votre nom?:1:entréeNom:true:Votre joli nom!:2:200}
  }
  {actionRow :
    {textInput:Quel est votre âge ?:1:entréeAge:true:Vous êtes jeune !:1:3}
  }
  {actionRow :
    {textInput:Quel est votre sexe ?:2:entréeGenre:true:N'importe quoi !:1:10}
  }
]`
}) ; /* Le modal lui-même, nous utilisons {textInput} pour accepter les entrées de l'utilisateur.

L'utilisation correcte de {textInput} serait :

{textInput: titre: type (1 : petit champ de texte, 2 : grand champ de texte): IDpersonnalisé: obligatoire( true, false ): placeholder: valMin: Valmax}

*/

bot.interactionCommand({
    name : "IDpersonnalisé",
    prototype : "modal", // Utilisation de "prototype" car cette interaction appartient à un modal.
    $interactionReply[Merci d'avoir soumis ce formulaire !;;;;everyone;true]

$title[$username a soumis un formulaire !;$userAvatar]
$addField[Son nom est...;$textInputValue[entréeNom]]]
$addField[Son âge est...;$textInputValue[entréeAge]] 
$addField[Son sexe est...;$textInputValue[entréeGenre]]`
}) ; /* Retourne les valeurs saisies précédemment dans le formulaire. Utilisation de $textInputValue pour les récupérer.

Vous pouvez également utiliser $channelSendMessage[IDsalon;contenu] pour envoyer les données à un autre salon.
$channelSendMessage[$channelID;{newEmbed:{title:$username a envoyé un formulaire !:$userAvatar}{field:Son nom est..:$textInputValue[entréeNom]}{field:Son âge est..:$textInputValue[entréeAge]}{field:Son genre est..:$textInputValue[entréeGenre]}}]
*/
```