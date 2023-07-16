---
title: '$suppressErrors'
description: '$suppressErrors will suppress aoi.js function errors.'
id: suppressErrors
---

`$suppressErrors` will suppress aoi.js function errors.

## Uso

```php
$suppressErrors[errorMsg?]
```

## Parámetros

| Campo    | Tipo   | Parámetros               | Requerido |
| -------- | ------ | ------------------------ |:---------:|
| errorMsg | string | Error message to return. |    no     |

## Ejemplo(s)

This will suppress all errors of your code and return the pre-defined error message instead:

```javascript
bot.command({
    name: "suppressErrors",
    code: `
    $description
    $suppressErrors[Something went wrong!]
    ` // Intentional invalid usage of $description
});
```