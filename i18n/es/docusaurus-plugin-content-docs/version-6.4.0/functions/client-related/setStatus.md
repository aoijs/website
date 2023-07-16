---
title: '$setStatus'
description: '$setStatus cambiará el estado del cliente.'
id: setStatus
---

`$setStatus` cambiará el estado del cliente.

## Uso

```php
$setStatus[nombre;tipo;estado;URL;afk?]
```

## Parámetros

| Campo  | Tipo            | Descripción                                                                                                                                         | Requerido |
| ------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| nombre | string          | El contenido del estado.                                                                                                                            |    sí     |
| tipo   | string, integer | 1. **PLAYING** (por defecto) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |    sí     |
| estado | string          | 1. **online** (por defecto) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                          |    sí     |
| URL    | string          | URL (streaming estado)                                                                                                                              |    sí     |
| afk?   | boolean         | 1. **true** <br /> 2. **false** (por defecto)                                                                                                 |    no     |

## Ejemplo(s)

Esto cambiará el estado del cliente a **PLAYING** y **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[¡Hola!;PLAYING;online]`
});
```