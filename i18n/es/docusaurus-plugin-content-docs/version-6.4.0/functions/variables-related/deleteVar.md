---
title: '$deleteVar'
description: '$deleteVar will delete a given variable.'
id: deleteVar
---

`$deleteVar` will delete a given variable.

## Modo de uso

```php
$deleteVar[variable;id;table?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                                    | Requerido |
| -------- | -------------- | --------------------------------------------- |:---------:|
| variable | cadena, número | Variable name.                                | verdadero |
| id       | entero         | ID of the variable to delete ( userID etc. ). | verdadero |
| table?   | string         | Variable table.                               |   falso   |

## Ejemplo(s)

This will delete a variable called "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```