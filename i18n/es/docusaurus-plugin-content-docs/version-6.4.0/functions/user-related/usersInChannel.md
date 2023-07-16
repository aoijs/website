---
title: '$usersInChannel'
description: '$usersInChannel devolverá todos los usuarios conectados al canal de voz especificado.'
id: usersInChannel
---

`$usersInChannel` devolverá todos los usuarios conectados al canal de voz especificado.

## Uso

```php
$usersInChannel[servidorID;opcion?;sep?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                                                                            | Requerido |
| ------- | ------ | --------------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero | Canal de voz.                                                                                                         | verdadero |
| opción? | cadena | Cómo devolver los usuarios <br /> 1. **id** (por defecto) <br /> 2. **usuario** - menciona a los usuarios |   falso   |
| sep?    | cadena | El separador para separar los valores devueltos.                                                                      |   falso   |

## Ejemplo(s)

Esto devolverá los usuarios conectados a un canal de voz:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
