---
title: '$checkCondition'
description: '$checkCondition checks if a condition is either true or false.'
id: checkCondition
---

`$checkCondition` checks if a condition is either true or false.

## Uso

```php
$checkCondition[condition]
```

## Parámetros

| Campo     | Tipo   | Descripción                  | Requerido |
| --------- | ------ | ---------------------------- |:---------:|
| condition | cadena | Condition you want to check. | verdadero |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | es igual a               |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical conjunction      |

## Ejemplo(s)

This will return `false` as `50` is greater than `25`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25]
  `
});
```

### Advanced Example

#### Logical conjunction

This will return `true` as `50` is greater than `25` and `120` is less than `280`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25&&120<280]
  `
});
```

#### Logical OR

This will return `true` as one of the two arguments (`50>25`) are `true`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25||true==false]
  `
});
```
