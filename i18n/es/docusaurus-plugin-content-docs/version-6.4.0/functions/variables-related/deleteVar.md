---
title: '$deleteVar'
description: '$deleteVar eliminará una variable determinada.'
id: deleteVar
---

`$deleteVar` eliminará una variable determinada.

## Uso

```php
$deleteVar[variable;id;table?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                                   | Requerido |
| -------- | -------------- | -------------------------------------------- |:---------:|
| variable | cadena, número | Nombre variable.                             | verdadero |
| id       | entero         | ID de la variable a eliminar ( userID etc.). | verdadero |
| tabla?   | string         | Tabla variable.                              |   falso   |

## Ejemplo(s)

Esto eliminará una variable llamada "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```