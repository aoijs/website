---
title: '$commandsCount'
description: '$commandsCount devolverá la cantidad de comandos.'
id: commandsCount
---

`$commandsCount` devolverá la cantidad de comandos.

## Uso

```php
$commandsCount
```

## Ejemplo(s)

Esto devolverá la cantidad de sus comandos:

```javascript
bot.command({
    name: 'commandsCount',
    code: `
  $commandsCount
  `
});
```