---
title: '$random'
description: '$random generará un número aleatorio entre tu rango elegido.'
id: random
---

`$random` generará un número aleatorio entre tu rango elegido.

## Uso

```php
$random[num1;num2;allow?;random?]
```

## Parámetros

| Campo                            | Tipo     | Parámetros                                  | Requerido |
| -------------------------------- | -------- | ------------------------------------------- |:---------:|
| num1                             | número   | Inicio de la extensión.                     | verdadero |
| num2                             | número   | Fin de la gama.                             | verdadero |
| ¿permitir?                       | booleano | Permite la devolución de números decimales. |   falso   |
| [¿aleatorio?](#advanced-Example) | boolean  | Si el número devuelto será aleatorio.       |   falso   |

## Ejemplo(s)

Esto devolverá un número aleatorio entre `20` y `250`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[20;250]
  `
});
```

### Ejemplo avanzado

Esto devolverá un número decimal aleatorio entre `25` y `50`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[25;50;true]  
  `
});
```

Esto devolverá un número aleatorio entre `45` y `64` y el segundo `$random` también será aleatorio:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[45;65;false;true]
  $random[45;65;false;true]
  `
});
```
