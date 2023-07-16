---
title: '$abbreviate'
description: '$abbreviate le permitirá abreviar números grandes.'
id: abbreviate
---

`$abbreviate` le permitirá abreviar números grandes.

## Uso

```php
$abbreviate[num;dec?]
```

## Parámetros

| Campo | Tipo   | Parámetros                    | Requerido |
| ----- | ------ | ----------------------------- |:---------:|
| num   | entero | Número para abreviar.         | verdadero |
| dec?  | entero | Decimal entre la abreviatura. |    no     |

## Ejemplo(s)

Esto devuelve: `20k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000]
  `
});
```

Esto devuelve: `20.0k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000;1]
  `
});
```
