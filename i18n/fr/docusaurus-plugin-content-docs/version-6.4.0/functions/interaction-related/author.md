---
title: '$author'
description: '$author ajoutera un champ auteur à un embed.'
id: author
---

`$author` ajoutera un champ auteur à un embed.

## Utilisation

```php
$author[index?;nom;URLicône?]
```

## Paramètres

| Champ     | Type                 | Description                                                   | Obligatoire |
| --------- | -------------------- | ------------------------------------------------------------- |:-----------:|
| index?    | entier               | Index de l'embed.                                             |    Faux     |
| nom       | chaîne de caractères | Titre de l'auteur qui sera affiché.                           |    vrai     |
| URLicône? | chaîne de caractères | URL de l'icône qui sera affichée à côté du titre de l'auteur. |    Faux     |

## Exemple(s)

Cela va créer un embed avec une description et le titre de l'auteur :

```javascript
bot.command({
    name: 'author',
    code: `
  $author[Bonjour !;$userAvatar[$authorID]]
  $description[Un embed avec un auteur !]
  `
});
```
