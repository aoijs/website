---
title: '$addField'
description: '$addField ajoutera un champ dans un embed.'
id: addField
---

`$addField` ajoutera un champ dans un embed.

## Utilisation

```php
$addField[titreChamp;descriptionChamp;aligner?]
```

## Paramètres

| Champ            | Type                 | Description                             | Obligatoire |
| ---------------- | -------------------- | --------------------------------------- |:-----------:|
| titreChamp       | chaîne de caractères | Le titre du champ.                      |    vrai     |
| descriptionChamp | chaîne de caractères | La description du champ.                |    vrai     |
| aligner?         | boolean              | Si le champ est aligné avec les autres. |    Faux     |

## Exemple(s)

Cela enverra un embed avec un champ et une description :

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Exemple;Regarde ça !;false]
  $description[Bonjour !]
  `
});
```
