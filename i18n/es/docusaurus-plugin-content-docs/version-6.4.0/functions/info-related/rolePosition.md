---
title: '$rolePosition'
description: '$rolePosition devolverá la posición de rol de un rol específico.'
id: rolePosition
---

`$rolePosition` devolverá la posición de rol de un rol específico.

## Modo de uso

```php
$rolePosition[rolID;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros       | Requerido |
| ----------- | ------ | ---------------- |:---------:|
| rolID       | entero | ID del rol.      | verdadero |
| servidorID? | entero | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá la posición del rol que quieras, para este ejemplo, usaremos el rol `@everyone`:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
