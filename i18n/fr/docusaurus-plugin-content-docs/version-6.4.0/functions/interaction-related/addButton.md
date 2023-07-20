---
title: '$addButton'
description: '$addButton ajoutera un bouton au message du bot.'
id: addButton
---

`$addButton` ajoutera un bouton au message du bot.

## Utilisation

```php
$addButton[index;étiquette;style;IDpersonnalisé;désactivé?;émoji?]
```

## Paramètres

| Champ          | Type                 | Description                                                                                                                | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| index          | nombre               | Dans quelle ligne (action) le bouton apparaît.                                                                             |    vrai     |
| étiquette      | chaîne de caractères | Le texte qui sera affiché sur le bouton comme étiquette.                                                                   |    vrai     |
| style          | chaîne de caractères | Le **[style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)** du bouton. |    vrai     |
| IDpersonnalisé | chaîne de caractères | L'ID personnalisé du composant utilisé pour identifier le bouton.                                                          |    vrai     |
| désactivé?     | booléen              | Rendre le bouton inutilisable/désactivé? <br /> 1. **true** <br /> 2. **false** (par défaut)                   |    Faux     |
| émoji?         | chaîne de caractères | L'émoji affiché dans le bouton.                                                                                            |    Faux     |

<details open>
  <summary><h3> Types de boutons </h3></summary>

| Nom                        | Valeur      | Couleur                    |                                                                                    |
| -------------------------- | ----------- | -------------------------- | ---------------------------------------------------------------------------------- |
| Primary                    | 1           | bleu-violet                | `$addButton[1;Bouton exemple;primary;IDpersonnalisé;false]`                        |
| Secondary                  | 2           | gris                       | `$addButton[1;Bouton exemple;secondary;IDpersonnalisé;false]`                      |
| Success                    | 3           | Vert                       | `$addButton[1;Bouton exemple;success;IDpersonnalisé;false]`                        |
| Danger                     | 4           | rouge                      | `$addButton[1;Bouton exemple;danger;IDpersonnalisé;false]`                         |
| Link                       | 5           | gris, navigue vers une URL | `$addButton[1;Bouton exemple;link;https://discord.gg;false]`                       |
| Emoji personnalisé         | peu importe | peu importe                | `$addButton[1;Bouton exemple;link;lien;false;nomEmoji,IDémoji,animé (true/false)]` |
| Unicode EmojiEmoji unicode | peu importe | peu importe                | `$addButton[1;Bouton exemple;link;lien;false;😀]`                                   |

</details>

## Exemple(s)

Ceci ajoute un bouton principal et un lien au message du bot :

```javascript
bot.command({
    name: 'addButton',
    code: `
    Bonjour!
    $addButton[1;Bouton exemple !;primary;boutonExemple;false;💔]
    $addButton[1;Bouton exemple !;link;https://discord.gg;false]
  `
});
```
```javascript
bot.interactionCommand({
    name : 'boutonExemple',
    prototype: 'button',
    code: `
    $interactionReply[Interaction de bouton géniale !]
  `
});
```