---
title: '$attachment'
description: '$attachment va créer une pièce jointe.'
id: attachment
---

`$attachment` va créer une pièce jointe.

## Utilisation

```php
$attachment[fichier;nom;type?]
```

## Paramètres

| Champ   | Type                 | Description                                                | Obligatoire |
| ------- | -------------------- | ---------------------------------------------------------- |:-----------:|
| fichier | chaîne de caractères | Contenu de la pièce jointe, de préférence une URL.         |    vrai     |
| nom     | chaîne de caractères | Nom de la pièce jointe.                                    |    vrai     |
| type?   | chaîne de caractères | Type de pièce jointe. <br /> 1. **URL** (par défaut) |    Faux     |

## Exemple(s)

Ceci va créer une pièce jointe :

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
