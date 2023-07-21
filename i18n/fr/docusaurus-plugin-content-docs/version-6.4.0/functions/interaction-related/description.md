---
title: '$description'
description: '$description est utilisé pour inclure un champ de description à un embed.'
id: description
---

`$description` est utilisé pour inclure un champ de description à un embed.

## Utilisation

```php
$description[index?;description]
```

## Paramètres

| Champ       | Type                 | Description                              | Obligatoire |
| ----------- | -------------------- | ---------------------------------------- |:-----------:|
| index?      | nombre               | L'index de l'embed.                      |    Faux     |
| description | chaîne de caractères | Le contenu de la description de l'embed. |    vrai     |

## Exemple(s)

Cela enverra un embed avec le contenu `aoi.js est génial !` :

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js est génial !]
  `
});
```