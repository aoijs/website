---
title: '$clear'
description: '$clear eliminará la cantidad de mensajes dados en un canal.'
id: clear
---

`$clear` eliminará la cantidad de mensajes dados en un canal.

## Uso

```php
$clear[cantidad;filtrar?;volverCuenta?;canalID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                                                                                                                              | Requerido |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| cantidad      | número   | Número de mensajes a eliminar.                                                                                                                          | verdadero |
| filtrar?      | consulta | Filtro de mensajes a eliminar. <br /> 1. **everyone** (por defecto) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **userID** |   falso   |
| volverCuenta? | booleano | Devuelve el recuento de mensajes eliminados. <br /> 1. **false** (por defecto) <br /> 2. **true**                                           |   falso   |
| canalID?      | entero   | En qué canal se eliminarán los permisos.                                                                                                                |   falso   |

## Ejemplo(s)

Esto eliminará los cincuenta mensajes más recientes que no están fijados:

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
