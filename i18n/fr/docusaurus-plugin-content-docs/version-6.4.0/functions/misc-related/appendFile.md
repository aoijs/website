---
title: '$appendFile'
description: '$appendFile ajoutera un texte à un fichier spécifique.'
id: appendFile
---

`$appendFile` ajoutera du texte à un fichier spécifique.

## Utilisation

```php
$appendFile[chemin;contenu;encodage?]
```

## Paramètres

| Champ   | Type                 | Description                                           | Obligatoire |
| ------- | -------------------- | ----------------------------------------------------- |:-----------:|
| chemin  | chaîne de caractères | Emplacement du fichier.                               |    vrai     |
| contenu | chaîne, nombre       | Contenu à ajouter au fichier                          |    vrai     |
| encode? | chaîne de caractères | Type d'encodage <br /> 1. **utf8** (par défaut) |    Faux     |

## Exemple(s)

Ceci va ajouter un commentaire à votre fichier principal :

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Bonjour !]
  `
});
```