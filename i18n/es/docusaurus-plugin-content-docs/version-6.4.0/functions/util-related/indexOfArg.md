---
title: '$indexOfArg'
description: '$indexOfArg will return the index of the given query.'
id: indexOfArg
---

`$indexOfArg` will return the index of the given query.

## Modo de uso

```php
$indexOfArg[string;query]
```

## Parámetros

| Campo    | Tipo     | Parámetros                                      | Requerido |
| -------- | -------- | ----------------------------------------------- |:---------:|
| string   | consulta | The text the bot will be checking the index of. | verdadero |
| consulta | consulta | The query the bot will be checking for.         | verdadero |

## Ejemplo(s)

This will return `3` as `great` is the third argument in the query:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```
