---
title: '$divide'
description: '$divide dividirá dos números dados.'
id: divide
---

`$divide` dividirá dos números dados.

## Modo de uso

```php
$divide[...números;...números]
```

## Parámetros

| Campo   | Tipo   | Parámetros                            | Requerido |
| ------- | ------ | ------------------------------------- |:---------:|
| números | número | Números que quieres dividir entre sí. | verdadera |

## Ejemplo(s)

Esto devolverá `23` ya que `69/3` lo iguala.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
