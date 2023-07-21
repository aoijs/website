---
title: '$deleteFile'
description: '$deleteFile supprimera un fichier donné.'
id: deleteFile
---

`$deleteFile` supprimera un fichier donné.

## Utilisation

```php
$deleteFile[chemin]
```

## Paramètres

| Champ  | Type                 | Description        | Obligatoire |
| ------ | -------------------- | ------------------ |:-----------:|
| chemin | chaîne de caractères | Chemin du fichier. |    vrai     |

## Exemple(s)

Cela supprimera votre `index.js` (ne faites pas cela) :

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```