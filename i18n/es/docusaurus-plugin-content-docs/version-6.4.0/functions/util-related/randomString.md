---
title: $randomString
description: '$randomString generará una cadena aleatoria.'
id: randomString
---

`$randomString` generará una cadena aleatoria.

## Uso

```php
$randomString[range;diffExec?]
```

## Parámetros

| Campo          | Tipo    | Parámetros                                  | Requerido |
| -------------- | ------- | ------------------------------------------- |:---------:|
| range          | número  | Rango de la cadena generada aleatoriamente. | verdadero |
| ¿Difiere Exec? | boolean |                                             |    no     |

## Ejemplo(s)

Esto devolverá una cadena aleatoria de veinte caracteres:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
