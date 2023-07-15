---
title: '$categoryChannels'
description: '$categoryChannels devolverá todos los canales de una categoría determinada.'
id: categoryChannels
---

`$categoryChannels` devolverá todos los canales de una categoría determinada.

## Modo de uso

```php
$categoryChannels[categoríaID;opción?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                                                                                | Requerido |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| categoríaID | entero   | El ID de la categoría.                                                                                                                                                                    | verdadero |
| opción?     | consulta | La opción en la que el bot devolverá los canales. <br /> 1. **names** - devuelve los nombres de los canales (por defecto)  <br /> 2. **ids** - devuelve los ID de los canales |    no     |
| sep?        | string   | El separador para separar los canales devueltos.                                                                                                                                          |   falso   |

## Ejemplo(s)

Esto devolverá todos los canales de la categoría del canal en el que ejecute el comando:

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```