---
title: '$fileExists'
description: '$fileExists vérifiera si un fichier donné existe.'
id: fileExists
---

`$fileExists` vérifiera si un fichier donné existe.

## Utilisation

```php
$fileExists[chemin]
```

## Paramètres

| Champ  | Type                 | Description        | Obligatoire |
| ------ | -------------------- | ------------------ |:-----------:|
| chemin | chaîne de caractères | Chemin du fichier. |    vrai     |

## Exemple(s)

Cela vérifiera si un fichier appelé `index.js` existe dans votre répertoire :

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```