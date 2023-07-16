---
title: '$exec'
description: '$exec ejecutará el código dado en tu consola.'
id: exec
---

`$exec` ejecutará el código dado en su consola.

## Uso

```php
$exec[codigo]
```

## Parámetros

| Campo  | Tipo   | Parámetros                       | Requerido |
| ------ | ------ | -------------------------------- |:---------:|
| código | string | Código a ejecutar en tu consola. | verdadera |

## Ejemplo(s)

Esto devolverá su versión actual del nodo:

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