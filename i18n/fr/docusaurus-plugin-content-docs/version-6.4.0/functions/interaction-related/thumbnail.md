---
title: '$thumbnail'
description: '$thumbnail ajoute une miniature à un embed (en haut à droite).'
id: thumbnail
---

`$thumbnail` ajoute une miniature à un embed (image du coin en haut à droite).

## Utilisation

```php
$thumbnail[index?;URL]
```

## Paramètres

| Champ  | Type                 | Description                  | Obligatoire |
| ------ | -------------------- | ---------------------------- |:-----------:|
| index? | nombre               | Index de l'embed.            |    Faux     |
| URL    | chaîne de caractères | URL de l'image de miniature. |    vrai     |

## Exemple(s)

Cela va créer un embed avec votre avatar en miniature :

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   
   $thumbnail[$userAvatar[$authorID]]
   $description[Coucou, c'est ton avatar !]`
});
```