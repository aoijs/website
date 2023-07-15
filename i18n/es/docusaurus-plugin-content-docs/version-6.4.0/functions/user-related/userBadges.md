---
title: '$userBadges'
description: '$userBadges will return the given users'' badges.'
id: userBadges
---

`$userBadges` will return the given users's badges.

## Modo de uso

```php
$userBadges[userId?;sep?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                   | Requerido |
| ------- | -------- | ---------------------------------------------------------------------------- |:---------:|
| userId? | entero   | The ID of the user you want the badges of.                                   |    no     |
| sep?    | consulta | Separator to split multiple badges from eachother <br /> `,` (default) |    no     |

## Ejemplo(s)

This will return your Discord Badges separated with a comma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```