---
title: '$image'
description: '$image ajoutera une image à un embed.'
id: image
---

`$image` ajoutera une image à un embed.

## Utilisation

```php
$image[index?;URL]
```

## Paramètres

| Champ  | Type                 | Description                                 | Obligatoire |
| ------ | -------------------- | ------------------------------------------- |:-----------:|
| index? | nombre               | Index de l'embed                            |    Faux     |
| URL    | chaîne de caractères | l'URL de l'image de l'embed. (image du bas) |    vrai     |

## Exemple(s)

Cela va créer un embed avec une image, un titre et un pied de page :

```javascript
bot.command({
    name: 'image',
    code: `
  $title[Bonjour !]
  $image[$userAvatar]
  $footer[Rebonjour !;$userAvatar]
  `
});
```