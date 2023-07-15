---
title: '$databasePing'
description: '$databasePing devolverá el ping de su base de datos.'
id: databasePing
---

`$databasePing` devolverá el ping de su base de datos.

## Modo de uso

```php
$databasePing
```

## Ejemplo(s)

Esto devolverá el ping de su base de datos:

```javascript
bot.command({
    name: 'databasePing',
    code: `
  El ping de mi base de datos es: $databasePing MS
  `
});
```