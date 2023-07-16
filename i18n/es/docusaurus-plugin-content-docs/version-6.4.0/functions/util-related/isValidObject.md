---
title: '$isValidObject'
description: '$isValidObject comprueba si el json dado es un objeto válido.'
id: isValidObject
---

`$isValidObject` comprueba si el json dado es un objeto válido.

## Uso

```php
$isValidObject[object]
```

## Parámetros

| Campo  | Tipo   | Parámetros   | Requerido |
| ------ | ------ | ------------ |:---------:|
| objeto | objeto | Objeto JSON. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` ya que el objeto dado es un objeto JSON válido:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
