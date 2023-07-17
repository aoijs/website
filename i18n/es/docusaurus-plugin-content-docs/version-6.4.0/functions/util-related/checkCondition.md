---
title: '$checkCondition'
description: '$checkCondition comprueba si una condición es verdadera o falsa.'
id: checkCondition
---

`$checkCondition` comprueba si una condición es verdadera o falsa.

## Uso

```php
$checkCondition[condicion]
```

## Parámetros

| Campo     | Tipo   | Descripción                    | Requerido |
| --------- | ------ | ------------------------------ |:---------:|
| condición | cadena | Condición que desea comprobar. | verdadero |

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

Esto devolverá `false` ya que `50` es mayor que `25`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25]
  `
});
```

### Ejemplo(s) avanzado

#### Conjunción causal

Esto devolverá `true` ya que `50` es mayor que `25` y `120` es menor que `280`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25&&120<280]
  `
});
```

#### O lógico

Esto devolverá `true` ya que uno de los dos argumentos (`50>25`) es `true`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25||true==false]
  `
});
```
