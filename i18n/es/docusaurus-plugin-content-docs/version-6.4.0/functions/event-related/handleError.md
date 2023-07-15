---
title: '$handleError'
description: '$handleError devolverá información sobre un error ocurrido.'
id: handleError
---

`$handleError` devolverá información sobre un error ocurrido.

## Uso

```php
$handleError[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción                                                                                                                                                             | Requerido |
| ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| opción | cadena | De qué devolver los datos. <br /> 1. **función** - nombre de función <br /> 2. **comando** - nombre de comando <br /> 3. **error**: error que ocurrió | verdadero |

## Ejemplo(s)

**Necesitas `eventos: ["onFunctionError"]` en tu archivo principal para poder usar esta función!**

```javascript
bot.functionErrorCommand({
    channel: "CanalID(opcional)",
    code: `Algo salió mal en tu "$handleError[command]" dominio! La función "$handleError[function]" devolvió el error "$handleError[error]"!`
});
```
