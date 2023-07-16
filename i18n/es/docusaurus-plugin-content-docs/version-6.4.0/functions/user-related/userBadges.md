---
title: '$userBadges'
description: '$userBadges devolverá las insignias de los usuarios dados.'
id: userBadges
---

`$userBadges` devolverá las insignias de los usuarios dados.

## Uso

```php
$userBadges[usuarioID?;sep?]
```

## Parámetros

| Campo     | Tipo   | Parámetros                                                                         | Requerido |
| --------- | ------ | ---------------------------------------------------------------------------------- |:---------:|
| usarioID? | entero | El ID del usuario del que quieres las insignias.                                   |   falso   |
| sep?      | cadena | Separador para dividir varias insignias entre sí <br /> `,` (predeterminado) |   falso   |

## Ejemplo(s)

Esto devolverá tus Insignias de Discord separadas por una coma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```