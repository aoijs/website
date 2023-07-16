---
title: '$argsCheck'
description: '$argsCheck verificará los argumentos de lo que el usuario escribió y el requerido, si los requisitos no se cumplieron, devolverá un mensaje de error.'
id: argsCheck
---

`$argsCheck` comprobará los argumentos del usuario escritos y el requerido, si no se cumplen los requisitos, devolverá un mensaje de error .

## Uso

```php
$argsCheck[condicion;mensaje del error]
```

## Parámetros

| Campo            | Tipo   | Descripción                                         | Requerido |
| ---------------- | ------ | --------------------------------------------------- |:---------:|
| condición        | cadena | Condición a realizar.                               | verdadero |
| Mensaje de error | cadena | Mensaje de error si la condición no se ha cumplido. | verdadero |

#### Operadores matemáticos

| Operador | Las expresiones matemáticas |
| -------- | --------------------------- |
| ==       | es igual a                  |
| !=       | no es igual a               |
| <=       | es inferior o igual a       |
| \>=     | mayor que o igual a         |
| \>      | es superior a               |
| <        | menos que                   |
| \       | \| O lógico                |
| &&       | conjunción causal           |

## Ejemplo(s)

Devuelve: Mayor que 2 argumentos si la condición se cumple, de lo contrario devolverá un mensaje de error.

```javascript
bot.command({
    name: "argsCheck",
    code: `
  ¡Tienes más de dos argumentos, bien!

  $argsCheck[>2;Tienes menos de dos argumentos!]
  `
});
```
