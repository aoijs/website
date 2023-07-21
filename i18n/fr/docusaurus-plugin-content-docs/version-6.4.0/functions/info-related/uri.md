---
title: '$uri'
description: '$uri va encoder ou décoder une URL.'
id: uri
---

`$uri` va encoder ou décoder une URL.

## Utilisation

```php
$uri[texte;type?]
```

## Paramètres

| Champ | Type de texte        | Libellé                                                                                           | Requis |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------- |:------:|
| texte | chaîne de caractères | Texte à encoder/décoder.                                                                          |  vrai  |
| type? | chaîne de caractères | Que faire avec le texte donné. <br /> 1. **encode** (par défaut) <br /> 2. **decode** |  Faux  |

## Exemple(s)

Cela va encoder un texte donné :

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js est génial :);encode]
  `
});
```

Ceci va décoder un texte donné :

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20est%20génial%20%3A);decode]
  `
});
```
