---
title: '$guildNames'
description: '$guildNames devolverá los nombres de la guía en los que se encuentra tu bot.'
id: guildNames
---

$guildNames devolverá los nombres de la guía en los que se encuentra tu bot.

## Uso

```php
$guildNames[sep?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                       | Requerido |
| ----- | ------ | ------------------------------------------------ |:---------:|
| sep?  | string | El separador para separar los valores devueltos. |    no     |

## Ejemplo(s)

Esto devolverá los nombres del gremio en el que está tu bot y lo separará por una coma:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
