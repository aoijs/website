---
title: '$onlyIf'
description: '$onlyIf comprobará una condición y devolverá un mensaje de error si esa condición no coincide.'
id: onlyIf
---

`$onlyIf` comprobará si hay una condición y devolverá un mensaje de error si esa condición no coincide.

## Uso

```php
$onlyIf[condition;error]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                        | Requerido |
| --------- | -------- | ------------------------------------------------- |:---------:|
| condición | consulta | Condición a comprobar.                            | verdadero |
| error     | consulta | Error a devolver cuando la condición no coincide. |    no     |

## Ejemplo(s)

Esto devolverá el mensaje de error ya que 5 no es igual a 3:

```javascript
bot.command({
    name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```