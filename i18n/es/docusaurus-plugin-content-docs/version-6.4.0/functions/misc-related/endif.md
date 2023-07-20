---
title: '$endif'
description: '$endif se usa para terminar una sentencia if.'
id: endif
---

`$endif` se usa para finalizar una declaración if.

## Uso

```php
$endif
```

:::advertir decrecación


`$if: "old"` está en desuso y ya no debe usarse, ya que se eliminará en el futuro.

:::


## Ejemplo(s)

Ejemplo de uso de `$if: old` (devolverá "Hello" cuando la condición sea verdadera):

```javascript
bot.command({
    name: "endif",
    $if: "old",
    code: `
  $if[1==1]
  Hello!
  $endif
  `
});
```