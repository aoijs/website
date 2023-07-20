---
title: '$if'
description: '$if comprobará una condición y devolverá verdadera o falsa dependiendo de que la condición sea verdadera o falsa.'
id: if
---

`$if` comprobará una condición y devolverá verdadero o falso dependiendo de que la condición sea verdadera o falsa.

## Uso

```php
$if[condicion;verdadero;falso?]
```

:::advertir decrecación


`$if: "old"` está en desuso y ya no debe usarse, ya que se eliminará en el futuro.

:::


## Parámetros

| Campo     | Tipo   | Descripción                                  | Requerido |
| --------- | ------ | -------------------------------------------- |:---------:|
| condición | cadena | Condición para usar                          | verdadero |
| true      | cadena | Qué volver cuando la condición es verdadera. | verdadero |
| falso?    | cadena | Qué volver cuando la condición es falsa.     |   falso   |

#### Después del operador matemático

| Operador | Las expresiones matemáticas |
| -------- | --------------------------- |
| ==       | es igual a                  |
| !=       | no es igual a               |
| <=       | es inferior o igual a       |
| \>=     | mayor que o igual a         |
| \>      | es superior a               |
| <        | menos que                   |
| \       | \| O lógico                |
| &&       | Y Lógico                    |

## Ejemplo(s)

Esto devolverá `That's false!` como `1` no es igual a `2`:

```javascript
bot.command({
    name: "if",
    code: `
    $if[1==2;That's true!;That's false!]
    `
});
```

Esto hará exactamente lo mismo con un uso diferente de `$if` usando `$if: "old"`:

```javascript
bot.command({
    name: "if",
    $if: "old",
    code: `
    $if[1==2]
    That's true!
    $else
    That's false!
    $endif
    `
});
```