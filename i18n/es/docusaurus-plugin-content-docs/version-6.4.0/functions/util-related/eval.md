---
title: '$eval'
description: '$eval ejecutará un código aoi.js dado.'
id: eval
---

`$eval` ejecutará un código aoi.js dado.

## Uso

```php
$eval[código;código de retorno?;enviar mensaje?;retornoEjecución?;ID de retorno?]
```

## Parámetros

| Campo                | Tipo     | Parámetros                                                                                                            | Requerido |
| -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |:---------:|
| código               | cadena   | Código de Aoi.js a ejecutar.                                                                                          | verdadero |
| código de retorno?   | booleano | Códigos de Retorno <br /> 1. **true** <br /> 2. **false** (por defecto)                                   |   falso   |
| enviar mensaje?      | booleano | Enviar salida. <br /> 1. **true** <br /> 2. **false** (por defecto)                                       |   falso   |
| ¿devolver ejecución? | booleano | Obtener más información acerca del caso específicado <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| ID de retorno?       | booleano | Devolver mensaje ID, <br /> 1. **true** <br /> 2. **false** (por defecto)                                 |   falso   |

## Ejemplo(s)

Esto devolverá tu ID de usuario:

```javascript
bot.command({
    name: "eval",
    code: `
    \`\`\`
    $eval[$authorID;true;true;true;true]
    \`\`\`
  `
});
```