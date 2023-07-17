---
title: '$elseif'
description: '$elseif se utiliza para crear una sentencia con condición.'
id: elseif
---

`$elseif` se utiliza para crear una sentencia con condición.

## Uso

```php
$elseif[condición]
```

:::warning decrecación


`$if: "old"` está obsoleto y ya no debería utilizarse ya que se eliminará en el futuro.

:::


## Ejemplo(s)

Ejemplo de uso de `$if: old` (devolverá "Hello" cuando la condición sea verdadera):

Requerirás que `$endelseif` termine la proposición `$elseIf`.

```javascript
bot.command({
    name: "if",
    $if: "old",
    code: `
  $if[1==2]
  Hello!
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```