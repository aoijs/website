---
title: '$getTextSplitLength'
description: '$getTextSplitLength devolverá la cantidad de argumentos dados.'
id: getTextSplitLength
---

`$getTextSplitLength` devolverá la cantidad de argumentos divididos en `$textSplit`.

## Uso

```php
$getTextSplitLength
```

## Ejemplo(s)

Esto devolverá `5` ya que hay cinco argumentos separados por comas dadas en `$textSplit`

```javascript
bot.command({
    name: 'getTextSplitLength',
    code: `
  $getTextSplitLength
  $textSplit[Hello, my, name, is, Leref;, ]
  `
});
```
