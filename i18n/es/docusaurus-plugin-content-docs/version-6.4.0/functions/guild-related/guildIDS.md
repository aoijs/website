---
title: '$guildIDS'
description: '$guildIDS devolverá el ID de cada gremio en el que esté tu bot.'
id: guildIDS
---

`$guildIDS` devolverá la cantidad de Bots en su servidor.

## Uso

```php
$guildIDS[sep?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                       | Requerido |
| ----- | ------ | ------------------------------------------------ |:---------:|
| sep?  | string | El separador para separar los valores devueltos. |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de servidores en los que se encuentra tu bot:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
