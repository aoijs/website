---
title: '$createObject'
description: '$createObject va créer un nouvel objet.'
id: createObject
---

`$createObject` va créer un nouvel objet.

## Utilisation

```php
$createObject[objet]
```

## Paramètres

| Champ | Type  | Description | Obligatoire |
| ----- | ----- | ----------- |:-----------:|
| objet | objet | Objet Json. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "createObject",
    code: `
  
  $createObject[{
    "bonjour": "bye",
    "bye": "bonjour"
  }]
  `
});
```