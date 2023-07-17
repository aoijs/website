---
title: '$djsEval'
description: '$djsEval ejecutará un código discord.js dado.'
id: djsEval
---

`$djsEval` ejecutará un código discord.js dado.

## Uso

```php
$djsEval[código;código de retorno?]
```

## Parámetros

| Campo              | Tipo   | Parámetros                                                                          | Requerido |
| ------------------ | ------ | ----------------------------------------------------------------------------------- |:---------:|
| código             | cadena | Código Discord.js a ejecutar.                                                       | verdadero |
| código de retorno? | cadena | Códigos de Retorno <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto devolverá tu ID de usuario:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```