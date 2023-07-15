---
title: '$appendFile'
description: '$appendFile añadirá un texto dado a un archivo específico.'
id: appendFile
---

`$appendFile` añadirá un texto dado a un archivo específico.

## Uso

```php
$appendFile[camino;contenido;codificar?]
```

## Parámetros

| Campo       | Tipo           | Parámetros                                          | Requerido |
| ----------- | -------------- | --------------------------------------------------- |:---------:|
| camino      | consulta       | Ubicación del archivo.                              | verdadero |
| contenido   | cadena, número | Contenido a añadir al archivo                       | verdadero |
| ¿codificar? | cadena         | Tipo de hilo <br /> 1. **utf8** (por defecto) |   falso   |

## Ejemplo(s)

Esto añadirá un comentario a su archivo principal:

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Hello!]
  `
});
```