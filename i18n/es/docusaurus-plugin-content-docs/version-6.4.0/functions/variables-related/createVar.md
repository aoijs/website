---
title: '$createVar'
description: '$createVar creará una nueva variable.'
id: createVar
---

`$createVar` creará una nueva variable.

## Uso

```php
$createVar[table;...vars]
```

## Parámetros

| Campo   | Tipo     | Parámetros               | Requerido |
| ------- | -------- | ------------------------ |:---------:|
| tabla   | consulta | Tabla variable.          | verdadero |
| ...vars | consulta | Nombre y valor variable. | verdadero |

## Ejemplo(s)

Esto creará una nueva variable con el nombre de "variable" y el valor de "valor":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```