---
title: '$deleteArray'
description: '$deleteArray supprimera un tableau précédemment créé.'
id: deleteArray
---

`$deleteArray` supprimera un tableau précédemment créé.

## Utilisation

```php
$deleteArray[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

Ceci supprimera le tableau "tableau" :

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[tableau]
  $createArray[tableau;Bonjour;ceci;est;incroyable]
  `
});
```