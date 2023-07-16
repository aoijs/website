---
title: '$exec'
description: '$exec will execute given code in your console.'
id: exec
---

`$exec` will execute given code in your console.

## Uso

```php
$exec[code]
```

## Parámetros

| Campo | Tipo   | Parámetros                       | Requerido |
| ----- | ------ | -------------------------------- |:---------:|
| code  | string | Code to execute in your console. | verdadera |

## Ejemplo(s)

This will return your current node version:

```javascript
bot.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```