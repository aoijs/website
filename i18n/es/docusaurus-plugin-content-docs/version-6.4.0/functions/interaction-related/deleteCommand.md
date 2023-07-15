---
title: '$deleteCommand'
description: '$deleteCommand eliminará el mensaje de comando inicial.'
id: deleteCommand
---

`$deleteCommand` eliminará el mensaje de comando inicial.

## Uso

```php
$deleteCommand
```

## Ejemplo(s)

Esto eliminará el mensaje de comando inicial:

```javascript
bot.command({
    name: 'deleteCommand',
    code: `
  Hola!
  $deleteCommand
  `
});
```
