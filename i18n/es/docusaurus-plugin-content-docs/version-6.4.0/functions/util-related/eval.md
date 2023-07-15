---
title: '$eval'
description: '$eval will execute given aoi.js code.'
id: eval
---

`$eval` will execute given aoi.js code.

## Modo de uso

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                                        | Requerido |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |:---------:|
| code             | consulta | Aoi.js code to execute.                                                                                           | verdadero |
| returnCode?      | boolean  | Return code. <br /> 1. **true** <br /> 2. **false** (por defecto)                                     |    no     |
| sendMessage?     | booleano | Send output. <br /> 1. **true** <br /> 2. **false** (por defecto)                                     |   falso   |
| returnExecution? | boolean  | Return more information about the executed code. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| returnID?        | boolean  | Return message ID, <br /> 1. **true** <br /> 2. **false** (por defecto)                               |    no     |

## Ejemplo(s)

This will return your user ID:

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