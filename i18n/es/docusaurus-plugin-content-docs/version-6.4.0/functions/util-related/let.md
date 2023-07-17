---
title: '$let'
description: '$let se utiliza para almacenar variables temporales.'
id: let
---

`$let` almacenará variables temporales que pueden ser recuperadas por `$get`.

## Uso

```php
$let[varname;value]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                       | Requerido |
| ------- | -------- | ------------------------------------------------ |:---------:|
| varname | consulta | Nombre de la variable temporal.                  | verdadero |
| valor   | consulta | Valor de la variable temporal que desea guardar. | verdadero |

## Ejemplo(s)

Esto devolverá `Ayaka` de `$get`:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
