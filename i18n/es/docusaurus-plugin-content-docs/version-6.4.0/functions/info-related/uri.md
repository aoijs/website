---
title: '$uri'
description: '$uri codificará o descodificará una URL.'
id: uri
---

`$uri` codificará o descodificará una URL.

## Modo de uso

```php
$uri[texto;tipo?]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                                                       | Requerido |
| ----- | -------- | ------------------------------------------------------------------------------------------------ |:---------:|
| texto | consulta | Texto a codificar/decodificar.                                                                   | verdadero |
| tipo? | consulta | Qué hacer con el texto dado. <br /> 1. **encode** (por defecto) <br /> 2. **decode** |    no     |

## Ejemplo(s)

Esto codificará un texto determinado:

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js es genial :);encode]
  `
});
```

Esto decodificará un texto determinado:

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20es%20genial%20%3A);decode]
  `
});
```
