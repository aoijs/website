---
title: '$createFile'
description: '$createFile va créer un fichier.'
id: createFile
---

`$createFile` va créer un fichier.

## Utilisation

```php
$createFile[fichier;nom]
```

## Paramètres

| Champ   | Type                 | Description                | Obligatoire |
| ------- | -------------------- | -------------------------- |:-----------:|
| fichier | chaîne de caractères | Contenu du fichier.        |    vrai     |
| nom     | chaîne de caractères | Le nom de la pièce jointe. |    vrai     |

## Exemple(s)

Cela va créer un fichier texte appelé **`exemple.txt`** avec le texte "Ceci est un exemple !" :

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[Ceci est un exemple!;exemple.txt]
  `
});
```
