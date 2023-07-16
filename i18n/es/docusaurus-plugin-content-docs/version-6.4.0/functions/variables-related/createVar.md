---
title: '$createVar'
description: '$createVar will create a new variable.'
id: createVar
---

`$createVar` will create a new variable.

## Uso

```php
$createVar[table;...vars]
```

## Parámetros

| Campo   | Tipo     | Parámetros               | Requerido |
| ------- | -------- | ------------------------ |:---------:|
| table   | consulta | Variable table.          | verdadero |
| ...vars | consulta | Variable name and value. | verdadero |

## Ejemplo(s)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```