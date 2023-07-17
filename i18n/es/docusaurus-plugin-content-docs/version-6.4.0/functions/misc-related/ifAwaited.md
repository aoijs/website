---
title: '$ifAwaited'
description: '$ifAwaited comprobará una condición y devolverá verdadero o falso dependiendo de que la condición sea verdadera o falsa.'
id: ifAwaited
---

`$ifAwaited` comprobará una condición y devolverá verdadero o falso dependiendo de que la condición sea verdadera o falsa.

## Uso

```php
$if[condicion;verdadero;falso?]
```

## Parámetros

| Campo     | Tipo   | Descripción                                  | Requerido |
| --------- | ------ | -------------------------------------------- |:---------:|
| condición | cadena | Condición para usar                          | verdadero |
| verdadero | cadena | Qué volver cuando la condición es verdadera. | verdadero |
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
| &&       | conjunción causal           |

## Ejemplo(s)

Esto ejecutará el comando `awaitedCommand` esperado ya que la declaración es verdadera:

```javascript
bot.command({
    name: "ifAwaited",
    code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
    $sendMessage[That's true!;false]
    `
});
```