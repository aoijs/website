---
title: '$endelseif'
description: '$endelseif se usa para finalizar una instrucción elseif.'
id: endelseif
---

`$endelseif` se usa para finalizar una instrucción elseif.

## Uso

```php
$endelseif
```

:::advertir decrecación


`$if: "old"` está obsoleto y ya no debería utilizarse ya que se eliminará en el futuro.

:::


## Ejemplo(s)

Ejemplo de uso de `$if: old` (devolverá "Hello" cuando la condición sea verdadera):

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