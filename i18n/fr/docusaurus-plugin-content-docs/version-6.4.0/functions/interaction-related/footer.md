---
title: '$footer'
description: '$footer ajoutera un pied de page à un embed.'
id: footer
---

`$footer` ajoutera un pied de page à un embed.

## Utilisation

```php
$footer[index?;contenu;URLicône?]
```

## Paramètres

| Champ     | Type                 | Description                                    | Obligatoire |
| --------- | -------------------- | ---------------------------------------------- |:-----------:|
| index?    | nombre               | Index de l'embed.                              |    Faux     |
| contenu   | chaîne, nombre       | Contenu du texte du pied de page.              |    vrai     |
| URLicône? | chaîne de caractères | Icône de pied de page (image en bas à gauche). |    Faux     |

## Exemple(s)

Cela va créer un embed avec un pied de page et un titre :

```javascript
bot.command({
    name: 'footer',
    code: `
  $title[Bonjour !]
  $footer[Rebonjour !;$userAvatar]
  `
});
```