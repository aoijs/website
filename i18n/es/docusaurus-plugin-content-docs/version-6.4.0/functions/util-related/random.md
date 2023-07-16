---
title: '$random'
description: '$random will generate a random number between your chosen span.'
id: random
---

`$random` will generate a random number between your chosen span.

## Uso

```php
$random[num1;num2;allow?;random?]
```

## Parámetros

| Campo                        | Tipo     | Parámetros                             | Requerido |
| ---------------------------- | -------- | -------------------------------------- |:---------:|
| num1                         | número   | Start of the span.                     | verdadero |
| num2                         | número   | End of the span.                       | verdadero |
| allow?                       | booleano | Allows returning of decimal numbers.   |   falso   |
| [random?](#advanced-Example) | boolean  | If the returned number will be random. |   falso   |

## Ejemplo(s)

This will return a random number between `20` and `250`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[20;250]
  `
});
```

### Advanced Example

This will return a random decimal number between `25` and `50`:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[25;50;true]  
  `
});
```

This will return a random number between `45` and `64` and the second `$random` will be random as well:

```javascript
bot.command({
    name: 'random',
    code: `
  $random[45;65;false;true]
  $random[45;65;false;true]
  `
});
```
