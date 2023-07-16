---
title: '$djsEval'
description: '$djsEval will execute given discord.js code.'
id: djsEval
---

`$djsEval` will execute given discord.js code.

## Uso

```php
$djsEval[code;returnCode?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                    | Requerido |
| ----------- | -------- | ----------------------------------------------------------------------------- |:---------:|
| code        | consulta | Discord.js code to execute.                                                   | verdadero |
| returnCode? | consulta | Return code. <br /> 1. **true** <br /> 2. **false** (por defecto) |    no     |

## Ejemplo(s)

This will return your user ID:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```