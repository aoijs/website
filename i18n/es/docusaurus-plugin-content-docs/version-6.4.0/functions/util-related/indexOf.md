---
title: '$indexOf'
description: '$indexOf devolverá el índice del carácter dado.'
id: indexOf
---

`$indexOf` devolverá el índice del carácter dado.

## Uso

```php
$indexOf[string;char]
```

## Parámetros

| Campo    | Tipo     | Parámetros                             | Requerido |
| -------- | -------- | -------------------------------------- |:---------:|
| string   | consulta | El texto del bot comprobará el índice. | verdadero |
| Carácter | consulta | Los caracteres que el bot buscará.     | verdadero |

## Ejemplo(s)

Esto devolverá `8` ya que es la primera posición del carácter `w`:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```
