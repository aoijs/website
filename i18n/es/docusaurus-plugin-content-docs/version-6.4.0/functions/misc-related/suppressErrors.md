---
title: '$suppressErrors'
description: '$suppressErrors eliminará los errores de función de aoi.js.'
id: suppressErrors
---

`$suppressErrors` eliminará los errores de función de aoi.js.

## Uso

```php
$suppressErrors[errorMsg?]
```

## Parámetros

| Campo             | Tipo   | Parámetros                   | Requerido |
| ----------------- | ------ | ---------------------------- |:---------:|
| mensaje de error? | string | Mensaje de error a regresar. |   falso   |

## Ejemplo(s)

Esto eliminará todos los errores de su código y devolverá el mensaje de error predefinido en su lugar:

```javascript
bot.command({
    name: "suppressErrors",
    code: `
    $description
    $suppressErrors[Algo salió mal!]
    ` // Uso intencional inválido de $description
});
```