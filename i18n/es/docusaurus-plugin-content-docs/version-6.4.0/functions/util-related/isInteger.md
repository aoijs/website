---
title: '$isInteger'
description: '$isInteger comprobará si el número dado es un número entero o no.'
id: isInteger
---

`$isInteger` verificará si el número dado es un número entero o no.

## Uso

```php
$isInteger[number]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                       | Requerido |
| ------ | ------ | ------------------------------------------------ |:---------:|
| número | número | Número que desea comprobar si es un entero o no. | verdadera |

## Ejemplo(s)

Esto verifica si tu mensaje contiene un entero y devuelve `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isInteger',
    code: `
  $isInteger[$message]
  `
});
```
