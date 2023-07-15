---
title: '$guildEmojis'
description: '$guildEmojis devolverá todos los canales de una categoría determinada.'
id: guildEmojis
---

`$guildEmojis` devolverá todos los canales de una categoría determinada.

## Uso

```php
$guildEmojis[sep?;servidorID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                       | Requerido |
| ----------- | -------- | ------------------------------------------------ |:---------:|
| sep?        | consulta | El separador para separar los valores devueltos. |    no     |
| servidorID? | entero   | La ID del gremio.                                |    no     |

## Ejemplo(s)

Esto devolverá el recuento de emoji de su servidor:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
