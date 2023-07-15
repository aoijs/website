---
title: '$guildID'
description: '$guildID devolverá el estandarte del gremio de un gremio determinado.'
id: guildID
---

`$guildID` devolverá el estandarte del gremio de un gremio determinado.

## Uso

```php
$guildID[nombre?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                 | Requerido |
| ------- | ------ | ---------------------------------------------------------- |:---------:|
| nombre? | string | El nombre del gremio al que quieres que se devuelva el ID. |   falso   |

## Ejemplo(s)

Esto devolverá true tu gremio existe:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
