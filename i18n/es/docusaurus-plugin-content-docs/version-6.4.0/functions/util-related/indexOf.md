---
title: '$indexOf'
description: '$indexOf will return the index of the given character.'
id: indexOf
---

`$indexOf` will return the index of the given character.

## Uso

```php
$indexOf[string;char]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                      | Requerido |
| ------ | -------- | ----------------------------------------------- |:---------:|
| string | consulta | The text the bot will be checking the index of. | verdadero |
| char   | consulta | The characters the bot will be checking for.    | verdadero |

## Ejemplo(s)

This will return `8` as it's the first occurring position of the character `w`:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```
