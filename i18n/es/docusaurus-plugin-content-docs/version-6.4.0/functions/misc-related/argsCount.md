---
title: '$argsCount'
description: '$argsCount devolverá la cantidad de comandos.'
id: argsCount
---

`$argsCount` devolverá la cantidad de argumentos dados.

## Uso

```php
$argsCount
```

## Ejemplo(s)

Esto devolverá la cantidad de argumentos en tu mensaje, por ejemplo, `[prefix]argsCount Hello Bye` devolverá dos:

```javascript
bot.command({
    name: 'argsCount',
    code: `
  $argsCount
  `
});
```
